import Head from 'next/head'
import { Typography, Grid, Box } from '@material-ui/core'
import { connectToDatabase } from '../lib/mongodb'
import ProductCard from '../components/ProductCard'

export default function Home({ newProducts, summerProducts, highestRated }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Grid item xs={12}>
        <Box my={4}>
          <Typography variant='h4' component='h2'>
            New
          </Typography>
        </Box>
      </Grid>
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        {newProducts.map(product => <ProductCard key={product._id} imgUrl={product.imgUrl} />)}
      </Grid>
      <Grid item xs={12}>
        <Box my={4}>
          <Typography variant='h4' component='h2'>
            Summer
          </Typography>
        </Box>
      </Grid>
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        {summerProducts.map(product => <ProductCard key={product._id} imgUrl={product.imgUrl} />)}
      </Grid>
      <Grid item xs={12}>
        <Box my={4}>
          <Typography variant='h4' component='h2'>
            Bestsellers
          </Typography>
        </Box>
      </Grid>
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        {highestRated.map(product => <ProductCard key={product._id} imgUrl={product.imgUrl} />)}
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()

  const newProductsData = await db.collection('products').aggregate([
    { $sort: { addDate: -1 } },
    { $limit: 4 }
  ]).toArray()

  const summerProductsData = await db.collection('products').aggregate([
    { $match: { tag: 'summer' } },
    { $sort: { addDate: -1 } },
    { $limit: 4 }
  ]).toArray()

  const highestRatedData = await db.collection('products').aggregate([
    { $sort: { rating: 1 } },
    { $limit: 4 }
  ]).toArray()

  const newProducts = JSON.parse(JSON.stringify(newProductsData))
  const summerProducts = JSON.parse(JSON.stringify(summerProductsData))
  const highestRated = JSON.parse(JSON.stringify(highestRatedData))

  return {
    props: {
      newProducts,
      summerProducts,
      highestRated,
    }
  }
}