import SneakerPage from '../../../components/sneakers-page/SneakersPage'
import Head from 'next/head'
import { paths } from '../../../src/menFilterHelpers'
import { connectToDatabase } from '../../../lib/mongodb'
import { useEffect, useState } from 'react'

export default function MenFiltersPage({ name, sneakers }) {
    const [sneakersState, setSneakersState] = useState(sneakers)
    
    useEffect(() => {
        setSneakersState(sneakers)
    }, [name])

    return <>
        <Head>
            <title>Men {name} collection</title>
        </Head>
        <SneakerPage
            sneakers={sneakersState}
            title={`Men ${name}`}
            genderFiltersInitialState={{ men: true, women: false }}
        />
    </>
}



export async function getStaticPaths() {
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { filter } = params
    const { db } = await connectToDatabase()

    let sneakersData

    if (filter === 'most-rated') {
        sneakersData = await db.collection('products').aggregate([
            { $match: { rating: { $gte: 4.8 } } },
            { $limit: 18 }
        ]).toArray()
    } else if (filter === 'new') {
        sneakersData = await db.collection('products').aggregate([
            { $match: { addDate: { $gte: new Date(2019, 1) } } },
            { $sort: { addDate: -1 } },
            { $limit: 18 }
        ]).toArray()

    } else if (filter === 'adidas' || filter === 'nike' || filter == 'reebok') {
        sneakersData = await db.collection('products').aggregate([
            {
                $search: {
                    index: 'products',
                    autocomplete: {
                        path: 'name',
                        query: filter,
                    }
                }
            },
            { $limit: 18 }
        ]).toArray()

    } else {
        sneakersData = await db.collection('products').aggregate([
            { $match: { tags: filter } },
            { $limit: 18 }
        ]).toArray()
    }

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            name: filter,
            sneakers

        }
    }
}