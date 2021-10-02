import { connectToDatabase } from '../../lib/mongodb'
import SneakersNewPage from '../../components/sneakers-page/SneakersNewPage'
import Head from 'next/head'

export default function New({ sneakers }) {
    return <>
        <Head>
            <title>New Products| EzeSneakers</title>
            <meta description='Professionally restored sneakers, new products. Save our planet by buying restored shoes.' />
        </Head>
        <SneakersNewPage sneakers={sneakers} title='New Sneakers' />
    </>
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { addDate: { $gte: new Date(2019, 1) } } },
        { $sort: { addDate: -1 } },
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}