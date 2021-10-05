import Head from 'next/head'
import Grid from '@mui/material/Grid'
import SwiperBanner from '../components/home/SwiperBanner'
import { connectToDatabase } from '../lib/mongodb'
import Section1 from '../components/home/sections/Section1'
import Section2 from '../components/home/sections/Section2'
import Section3 from '../components/home/sections/Section3'
import Section4 from '../components/home/sections/Section4'

export default function Home({ featuredSneakers, summerSneakers }) {
  return (
    <>
      <Head>
        <title>Home Page | EzeSneakers</title>
      </Head>
      <SwiperBanner />
      <Grid container className='page-container'>
        <Grid item xs={0} lg={1} />
        <Grid item xs={12} lg={10}>
          <Section1 />
          <Section2 featuredSneakers={featuredSneakers} />
          <Section3 />
          <Section4 summerSneakers={summerSneakers} />
        </Grid>
        <Grid item xs={0} lg={1} />
      </Grid>

    </>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()

  const featuredSneakersData = await db.collection('products').aggregate([
    { $match: { tags: 'featured' } },
    { $limit: 15 }
  ]).toArray()

  const summerSneakersData = await db.collection('products').aggregate([
    { $match: { tags: 'summer' } },
    { $limit: 15 }
  ]).toArray()

  const summerSneakers = JSON.parse(JSON.stringify(summerSneakersData))
  const featuredSneakers = JSON.parse(JSON.stringify(featuredSneakersData))

  return {
    props: {
      featuredSneakers,
      summerSneakers
    }
  }
}