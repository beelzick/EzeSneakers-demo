import { connectToDatabase } from '../../lib/mongodb'
import Head from 'next/head'
import { ObjectId } from 'mongodb'
import { Grid, Box, Button, Typography, Paper, Chip, FormControlLabel } from '@material-ui/core'
import styles from '../../styles/sneakerPage.module.css'
import Rating from '@material-ui/lab/Rating';
import SizesSelect from '../../components/SizesSelect'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import SmallCard from '../../components/SmallCard'
import Carousel from 'react-material-ui-carousel'

export default function ProductPage({ name, price, imgUrl, sex, tag, rating, description, sizes, checkAlso }) {
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <Grid container className={styles.pageContainer}>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={8}>
                    <Grid container>
                        <Grid item xs={7}>
                            <Box>
                                <img src='https://res.cloudinary.com/dfvpybkta/image/upload/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg' className={styles.image}></img>
                            </Box>
                            <Box p={2}>
                                <Typography variant='h5' component='h2' gutterBottom>
                                    Why should I buy this product?
                                </Typography>
                                <Typography variant='body1' gutterBottom>
                                    Our website is known for its fast and hassle-free delivery.
                                    By ordering a product <strong>by 4pm</strong> (including weekends), you can be sure it will arrive in your hands <strong>the next day</strong>.
                                </Typography>
                                <Typography variant='body1' gutterBottom>
                                    In addition, we offer product <strong>returns of up to 70 days</strong>, which is significantly more than our competitors.
                                    What's more, all products on offer come with a <strong>two-year guarantee</strong>.
                                </Typography>
                            </Box>
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
                                <Typography>
                                    Choose size
                                </Typography>
                                <SizesSelect sizes={sizes} />
                                <Grid container direction='column'>
                                    <Box my={2}>
                                        <Button type='button' variant='contained'
                                            size='large' color='primary' className={styles.button}
                                            endIcon={<ShoppingCartIcon />}
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
                                <Carousel>
                                    <Grid container direction='row' justifyContent='space-between'>
                                        {checkAlso.map(sneaker => <Box key={sneaker._id}><SmallCard /></Box>)}
                                    </Grid>
                                    <Grid container direction='row' justifyContent='space-between'>
                                        {checkAlso.map(sneaker => <Box key={sneaker._id}><SmallCard /></Box>)}
                                    </Grid>
                                    <Grid container direction='row' justifyContent='space-between'>
                                        {checkAlso.map(sneaker => <Box key={sneaker._id}><SmallCard /></Box>)}
                                    </Grid>
                                </Carousel>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={2}>

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
    const { name, price, imgUrl, sex, tag, rating, description, sizes } = JSON.parse(JSON.stringify(sneakerData))
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
            checkAlso
        }
    }
}