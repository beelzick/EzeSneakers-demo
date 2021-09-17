import Head from 'next/head'
import { Typography, Grid, Box } from '@mui/material'
import { connectToDatabase } from '../lib/mongodb'
import ProductCard from '../components/product-card/ProductCard'
import styles from '../styles/index.module.css'


export default function Home({ newSneakers, summerSneakers, highestRated }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Grid container className='page-container'>
        {/* <Grid item xs={12}>
          <Box mb={4}>
            <Typography variant='h4' component='h2'>
              New
            </Typography>
          </Box>
        </Grid>
        <Carousel className={styles.carousel}>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {newSneakers.slice(0, 4).map(sneaker => <ProductCard price={sneaker.price} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} name={sneaker.name} />)}
          </Grid>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {newSneakers.slice(4, 8).map(sneaker => <ProductCard price={sneaker.price} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} name={sneaker.name} />)}
          </Grid>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {newSneakers.slice(8, 12).map(sneaker => <ProductCard price={sneaker.price} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} name={sneaker.name} />)}
          </Grid>
        </Carousel>
        <Grid item xs={12}>
          <Box my={4}>
            <Typography variant='h4' component='h2'>
              Summer
            </Typography>
          </Box>
        </Grid>
        <Carousel className={styles.carousel}>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {summerSneakers.slice(0, 4).map(sneaker => <ProductCard price={sneaker.price} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} name={sneaker.name} />)}
          </Grid>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {summerSneakers.slice(4, 8).map(sneaker => <ProductCard price={sneaker.price} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} name={sneaker.name} />)}
          </Grid>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {summerSneakers.slice(8, 12).map(sneaker => <ProductCard price={sneaker.price} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} name={sneaker.name} />)}
          </Grid>
        </Carousel>
        <Grid item xs={12}>
          <Box my={4}>
            <Typography variant='h4' component='h2'>
              Bestsellers
            </Typography>
          </Box>
        </Grid>
        <Carousel className={styles.carousel}>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {highestRated.slice(0, 4).map(sneaker => <ProductCard price={sneaker.price} name={sneaker.name} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} />)}
          </Grid>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {highestRated.slice(4, 8).map(sneaker => <ProductCard price={sneaker.price} name={sneaker.name} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} />)}
          </Grid>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {highestRated.slice(8, 12).map(sneaker => <ProductCard price={sneaker.price} name={sneaker.name} id={sneaker._id} key={sneaker._id} imgUrl={sneaker.imgUrl} />)}
          </Grid>
        </Carousel> */}
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()

  const newSneakersData = await db.collection('products').aggregate([
    { $sort: { addDate: -1 } },
    { $limit: 12 }
  ]).toArray()

  const summerSneakersData = await db.collection('products').aggregate([
    { $match: { tag: 'summer' } },
    { $sort: { addDate: -1 } },
    { $limit: 12 }
  ]).toArray()

  const highestRatedData = await db.collection('products').aggregate([
    { $sort: { rating: 1 } },
    { $limit: 12 }
  ]).toArray()

  const newSneakers = JSON.parse(JSON.stringify(newSneakersData))
  const summerSneakers = JSON.parse(JSON.stringify(summerSneakersData))
  const highestRated = JSON.parse(JSON.stringify(highestRatedData))

  return {
    props: {
      newSneakers,
      summerSneakers,
      highestRated,
    }
  }
}