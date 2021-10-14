import SneakersPage from '../components/sneakers-page/SneakersPage'
import { connectToDatabase } from '../lib/mongodb'
import Head from 'next/head'

export default function AllSneakers({ sneakers }) {
    return <>
        <Head>
            <title>All Sneakers | EzeSneakers</title>
            <meta name='description' content='Professionally restored sneakers. Save our planet by buying restored shoes.' />
        </Head>
        <SneakersPage sneakers={sneakers} apiName='all' title='All Sneakers' />
    </>
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()
    const sneakersData = await db.collection('products').find({}).limit(18).toArray()
    const sneakers = JSON.parse(JSON.stringify(sneakersData))

    return {
        props: {
            sneakers
        }
    }
}