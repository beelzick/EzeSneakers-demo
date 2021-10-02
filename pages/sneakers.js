import { connectToDatabase } from '../lib/mongodb'
import SneakerPage from '../components/sneakers-page/SneakersPage'
import Head from 'next/head'
export default function Men({ sneakers }) {
    return <>
        <Head>
            <title>Restored Sneakers | EzeSneakers</title>
            <meta description='EzeSneakers offers professionally restored shoes at the lowest prices.
         Platform wants to give sneakers a second life, without compromisiing on their quality'/>
        </Head>
        <SneakerPage sneakers={sneakers} title='All Sneakers' apiName='all' />
    </>
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').find({}).limit(20).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}


