import { connectToDatabase } from '../../lib/mongodb'
import SneakerPage from '../../src/components/SneakersPage/SneakersPage'
import Head from 'next/head'

export default function Summer({ sneakers }) {
    return (
        <>
            <Head>
                <title>Summer Collection | EzeSneakers</title>
                <meta name='description' content='Professionally restored sneakers ideal for summer. Save our planet by buying restored shoes.' />
            </Head>
            <SneakerPage sneakers={sneakers} title='Autumn Sneakers Collection' apiName='season' />
        </>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { tags: 'autumn', } },
        { $limit: 18 }
    ]).toArray()
    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}
