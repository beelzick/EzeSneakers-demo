import SneakerPage from '../../../components/sneakers-page/SneakersPage'
import Head from 'next/head'
import { womenPaths } from '../../../src/filterHelpers'
import { connectToDatabase } from '../../../lib/mongodb'

export default function MenFiltersPage({ name, sneakers, filter }) {
    return <>
        <Head>
            <title>{`${name[0].toUpperCase()}${name.slice(1)} Collection - Women Restored Sneakers`}</title>
        </Head>
        <SneakerPage
            sneakers={sneakers}
            title={`${name[0].toUpperCase()}${name.slice(1)} Collection for Women`}
            filterGroup='women'
            filter={filter}
        />
    </>
}

export async function getStaticPaths() {
    return {
        paths: womenPaths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { filter } = params
    const { db } = await connectToDatabase()
    let name = filter
    let sneakersData

    switch (filter) {
        case 'most-rated':
            sneakersData = await db.collection('products').aggregate([
                {
                    $match:
                    {
                        rating: { $gte: 4.8 },
                        gender: 'woman'
                    },
                },
                { $limit: 18 }
            ]).toArray()
            name = 'Most Rated'
            break
        case 'new':
            sneakersData = await db.collection('products').aggregate([
                {
                    $match: {
                        addDate: { $gte: new Date(2019, 1) },
                        gender: 'woman'
                    }
                },
                { $sort: { addDate: -1 } },
                { $limit: 18 }
            ]).toArray()
            break
        case 'women-love':
            sneakersData = await db.collection('products').aggregate([
                {
                    $match: {
                        tags: 'women love',
                        gender: 'woman'
                    }
                }
            ]).toArray()
            name = 'Women Love'
            break
        case 'adidas':
        case 'nike':
        case 'reebok':
            sneakersData = await db.collection('products').aggregate([
                {
                    $search: {
                        index: 'products',
                        compound: {
                            must: [
                                {
                                    autocomplete: {
                                        path: 'name',
                                        query: filter,
                                    }
                                },
                                {
                                    text: {
                                        path: 'gender',
                                        query: 'woman'
                                    }
                                }
                            ]
                        }
                    }
                },
                { $limit: 18 }
            ]).toArray()
            break
        default:
            sneakersData = await db.collection('products').aggregate([
                { $match: { tags: filter, gender: 'woman' } },
                { $limit: 18 }
            ]).toArray()
    }

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            name,
            sneakers,
            filter
        }
    }
}