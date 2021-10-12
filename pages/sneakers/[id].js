import { connectToDatabase } from '../../lib/mongodb'
import { ObjectId } from 'mongodb'
import Head from 'next/head'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import SizesSelect from '../../components/show-page/SizesSelect'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShouldBuyText from '../../components/show-page/ShouldBuyText'
import { itemAdd, itemUpdate, selectCartItemById } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectSize, setSize } from '../../redux/slices/selectedSizeSlice'
import { useEffect } from 'react'
import { selectSizeError, setSizeError } from '../../redux/slices/sizeErrorSlice'
import { sizeExists, UpdateData } from '../../src/showPageHelpers'
import ObjectID from 'bson-objectid'
import StyledRating from '../../components/show-page/StyledRating'
import AddFavorites from '../../components/show-page/AddFavorites'
import { useSnackbar } from 'notistack'
import Image from 'next/image'

export default function SneakerPage({ name, price, imgUrl, gender, tags, rating, description, sizes, checkAlso, _id }) {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const selectedSize = useSelector(selectSize)
    const sizeError = useSelector(selectSizeError)
    const cartItem = useSelector(state => selectCartItemById(state, _id))

    useEffect(() => {
        dispatch(setSize(null))
    }, [dispatch])

    const item = {
        _id,
        name,
        price,
        tags,
        gender,
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
            enqueueSnackbar('Added to cart', {
                variant: 'success'
            })
        } else if (cartItem && !sizeExists(selectedSize, cartItem.selectedSizes)) {
            dispatch(itemUpdate(new UpdateData(_id, cartItem.selectedSizes, selectedSize).sizeNotExists()))
            enqueueSnackbar('Added to cart', {
                variant: 'success'
            })
        } else {
            dispatch(itemAdd(item))
            enqueueSnackbar('Added to cart', {
                variant: 'success'
            })
        }
    }

    return (
        <>
            <Head>
                <title>{`${name} | EzeSneakers`}</title>
                <meta name='description' content={`${name} - this product is one of EzeSneakers restored shoes collection. 
                Buy ${name} and enjoy saving our Planet by using restored shoes.`} />
            </Head>
            <Grid container className='page-container' justifyContent='center'>
                <Grid item xl={8}>
                    <Grid container>
                        <Grid item xs={12} md={7} >
                            <Box>
                                <Image
                                    src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1411,q_100/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.webp'
                                    width={1411}
                                    height={1411}
                                    alt={name}
                                    title={name}
                                    className='show-page-img'
                                />
                            </Box>
                            <Box component='div' mb={1.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <ShouldBuyText />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ paddingLeft: { md: '16px' } }}>
                                <Typography variant='h3' component='h1'>
                                    {name}
                                </Typography>
                                <Grid container>
                                    <Typography variant='h4' component='h2' my={1} sx={{ fontFamily: '\'Roboto\', sans-serif' }} >
                                        {price} $
                                    </Typography>
                                    <Grid item xs={12}>
                                        <Box mb={1}>
                                            <StyledRating precision={0.1} defaultValue={rating} readOnly />
                                        </Box>
                                        <Box mb={1}>
                                            <Grid container>
                                                <Box mr={1}>
                                                    <Chip
                                                        color='primary'
                                                        size='small'
                                                        label={gender === 'man' ? 'men\'s sneakers' : 'women\'s sneakers'}
                                                    />
                                                </Box>
                                                {tags.map((tag, index) => (
                                                    <Box mr={1} key={index}>
                                                        <Chip color='primary' size='small' label={tag} />
                                                    </Box>
                                                ))}
                                            </Grid>
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
                                    <Box my={2}>
                                        <Button
                                            type='button'
                                            variant='contained'
                                            size='large'
                                            color='primary'
                                            className='w-100'
                                            endIcon={<ShoppingCartIcon />}
                                            onClick={handleAddCart}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Box>
                                    <AddFavorites id={_id} />
                                </Grid>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Description
                                </Typography>
                                <Box mb={1}>
                                    <Typography variant='body1'>
                                        {description}.
                                    </Typography>
                                </Box>
                                <Box component='div' mb={1} sx={{ display: { xs: 'block', md: 'none' } }}>
                                    <ShouldBuyText />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
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
    const { name, price, imgUrl, gender, tags, rating, description, sizes, _id } = JSON.parse(JSON.stringify(sneakerData))

    return {
        props: {
            name,
            price,
            imgUrl,
            gender,
            tags,
            rating,
            description,
            sizes,
            checkAlso,
            _id
        }
    }
}