import { connectToDatabase } from '../../lib/mongodb'
import SneakersPage from '../../src/components/SneakersPage/SneakersPage'
import Head from 'next/head'

export default function New({ sneakers }) {
    return (
        <>
            <Head>
                <title>New Products| EzeSneakers</title>
                <meta
                    name='description'
                    content='Professionally restored sneakers, new products. Save our planet by buying restored shoes.'
                />
            </Head>
            <SneakersPage
                sneakers={sneakers}
                title='New Sneakers'
                apiName='new'
            />
        </>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { addDate: { $gte: new Date(2019, 1) } } },
        { $sort: { addDate: -1 } },
        { $limit: 18 }
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}