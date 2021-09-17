import { connectToDatabase } from '../../lib/mongodb'
import Head from 'next/head'
import { ObjectId } from 'mongodb'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import styles from '../../styles/showPage.module.css'
import Rating from '@mui/material/Rating';
import SizesSelect from '../../components/show-page/SizesSelect'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import SmallCard from '../../components/product-card/SmallCard'
// import Carousel from 'react-material-ui-carousel'
import ShouldBuyText from '../../components/show-page/ShouldBuyText'
import { itemAdd, itemUpdate, selectCartItemById } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectSize, setSize } from '../../redux/slices/selectedSizeSlice'
import { useEffect } from 'react'
import { selectSizeError, setSizeError } from '../../redux/slices/sizeErrorSlice'
import { sizeExists, UpdateData } from '../../src/showPageHelpers'
import ObjectID from 'bson-objectid'

export default function SneakerPage({ name, price, imgUrl, sex, tag, rating, description, sizes, checkAlso, _id }) {
    const dispatch = useDispatch()
    const selectedSize = useSelector(selectSize)
    const sizeError = useSelector(selectSizeError)
    const cartItem = useSelector(state => selectCartItemById(state, _id))

    useEffect(() => {
        dispatch(setSize(null))
    }, [])

    const item = {
        _id,
        name,
        price,
        tag,
        sex,
        imgUrl,
        sizes,
        selectedSizes: [
            {
                id: ObjectID().toHexString(),
                size: selectedSize,
                qty: 1,
            }
        ]
    }

    const handleAddCart = () => {

        if (!selectedSize) {
            return dispatch(setSizeError(true))
        }

        if (cartItem && sizeExists(selectedSize, cartItem.selectedSizes)) {
            dispatch(itemUpdate(new UpdateData(_id, cartItem.selectedSizes, selectedSize).sizeExists()))

        } else if (cartItem && !sizeExists(selectedSize, cartItem.selectedSizes)) {
            dispatch(itemUpdate(new UpdateData(_id, cartItem.selectedSizes, selectedSize).sizeNotExists()))

        } else {
            dispatch(itemAdd(item))
        }
    }

    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <Grid container className='page-container'>
                <Grid container className={styles.pageContainer}>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid item xs={7}>
                                <Box>
                                    <img src='https://res.cloudinary.com/dfvpybkta/image/upload/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg' className={styles.image}></img>
                                </Box>
                                <ShouldBuyText />
                            </Grid>
                            <Grid item xs={5}>
                                <Box px={2}>
                                    <Typography variant='h4' component='h1' >
                                        {name}
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Box mb={1}>
                                                <Rating precision={0.5} name="size-medium" defaultValue={rating} readOnly />
                                            </Box>
                                            <Box mb={1}>
                                                <Grid container>
                                                    <Box mr={1}>
                                                        <Chip color='primary' size="small" label={sex} />
                                                    </Box>
                                                    <Box mr={1}>
                                                        {tag && <Chip color='primary' size='small' label={tag} />}
                                                    </Box>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box mt={1}>
                                                <Typography variant='h4' component='h2' align='right'>
                                                    {price} $
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Typography color={sizeError ? 'error' : 'primary'}>
                                        Choose size
                                    </Typography>
                                    <SizesSelect sizes={sizes} />
                                    <Box my={1}>
                                        {sizeError && (
                                            <Typography color='error'>
                                                Choose size
                                            </Typography>
                                        )}
                                    </Box>
                                    <Grid container direction='column'>
                                        <Box mb={2}>
                                            <Button
                                                type='button'
                                                variant='contained'
                                                size='large'
                                                color='primary'
                                                className={styles.button}
                                                endIcon={<ShoppingCartIcon />}
                                                onClick={handleAddCart}
                                            >
                                                Add to Cart
                                            </Button>
                                        </Box>
                                        <Box mb={2}>
                                            <Button type='button' variant='outlined'
                                                size='large' color='primary' className={styles.button}
                                                endIcon={<FavoriteIcon />}
                                            >
                                                Add to favorites
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Typography variant='h5' component='h2' gutterBottom>
                                        Description
                                    </Typography>
                                    <Typography variant='body1'>
                                        {description}.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box px={2} className={styles.checkAlsoStyles}>
                            <Grid container direction='column'>
                                <Typography variant='h5' component='h3' gutterBottom>
                                    You can check also
                                </Typography>
                                <Box mt={1}>
                                    {/* <Carousel>
                                        <Grid container direction='row' justifyContent='space-between'>
                                            {checkAlso.map(sneaker => <Box key={sneaker._id}><SmallCard /></Box>)}
                                        </Grid>
                                        <Grid container direction='row' justifyContent='space-between'>
                                            {checkAlso.map(sneaker => <Box key={sneaker._id}><SmallCard /></Box>)}
                                        </Grid>
                                        <Grid container direction='row' justifyContent='space-between'>
                                            {checkAlso.map(sneaker => <Box key={sneaker._id}><SmallCard /></Box>)}
                                        </Grid>
                                    </Carousel> */}
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={2} />
                </Grid>
            </Grid>
        </>
    )
}


export async function getStaticPaths() {
    const { db } = await connectToDatabase()
    const sneakersData = await db.collection('products').find({}).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))

    const paths = sneakers.map(sneaker => {
        return {
            params: { id: sneaker._id }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { db } = await connectToDatabase()
    const sneakerData = await db.collection('products').findOne({ _id: ObjectId(params.id) })
    const checkAlsoData = await db.collection('products').aggregate([
        { $match: { rating: { $gte: 4.5 } } },
        { $sample: { size: 3 } }
    ]).toArray()
    const checkAlso = JSON.parse(JSON.stringify(checkAlsoData))
    const { name, price, imgUrl, sex, tag, rating, description, sizes, _id } = JSON.parse(JSON.stringify(sneakerData))
    return {
        props: {
            name,
            price,
            imgUrl,
            sex,
            tag,
            rating,
            description,
            sizes,
            checkAlso,
            _id
        }
    }
}