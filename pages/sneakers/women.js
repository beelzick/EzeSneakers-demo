import { connectToDatabase } from '../../lib/mongodb'
import SneakerPage from '../../components/sneakers-page/SneakersPage'
import Head from 'next/head'

export default function Women({ sneakers }) {
    return <>
        <Head>
            <title>Women | EzeSneakers</title>
            <meta description='Professionally restored sneakers for women. Save our planet by buying restored shoes.' />
        </Head>
        <SneakerPage sneakers={sneakers} title='For Women' apiName='woman' genderFiltersInitialState={{ men: false, women: true }} />
    </>
}
export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { gender: 'woman' } },
        { $limit: 18 }
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}
