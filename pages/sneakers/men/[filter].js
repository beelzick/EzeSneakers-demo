import SneakerPage from '../../../components/sneakers-page/SneakersPage'
import Head from 'next/head'
import { menPaths } from '../../../src/filterHelpers'
import { connectToDatabase } from '../../../lib/mongodb'

export default function MenFiltersPage({ name, sneakers }) {
    return <>
        <Head>
            <title>{`${name[0].toUpperCase()}${name.slice(1)} Collection for Men`}</title>
        </Head>
        <SneakerPage
            sneakers={sneakers}
            //capitalized title
            title={`${name[0].toUpperCase()}${name.slice(1)} Collection for Men`}
        />
    </>
}

export async function getStaticPaths() {
    return {
        paths: menPaths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { filter } = params
    const { db } = await connectToDatabase()
    let name = filter
    let sneakersData

    if (filter === 'most-rated') {
        sneakersData = await db.collection('products').aggregate([
            {
                $match: {
                    rating: { $gte: 4.8 },
                    gender: 'man'
                }
            },
            { $limit: 18 }
        ]).toArray()
        name = 'Most Rated'
    } else if (filter === 'new') {
        sneakersData = await db.collection('products').aggregate([
            {
                $match: {
                    addDate: { $gte: new Date(2019, 1) },
                    gender: 'man'
                }
            },
            { $sort: { addDate: -1 } },
            { $limit: 18 }
        ]).toArray()
    } else if (filter === 'adidas' || filter === 'nike' || filter == 'reebok') {
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
                                },
                            },
                            {
                                text: {
                                    path: 'gender',
                                    query: 'man'
                                }
                            }
                        ]
                    }
                }
            },
            { $limit: 18 }
        ]).toArray()
    } else {
        sneakersData = await db.collection('products').aggregate([
            {
                $match: {
                    tags: filter,
                    gender: 'man'
                }
            },
            { $limit: 18 }
        ]).toArray()
    }

    const sneakers = JSON.parse(JSON.stringify(sneakersData))

    return {
        props: {
            name,
            sneakers

        }
    }
}