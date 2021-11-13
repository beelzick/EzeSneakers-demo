import SneakerPage from '../../../src/components/SneakersPage/SneakersPage'
import Head from 'next/head'
import { connectToDatabase } from '../../../lib/mongodb'

export default function MenFiltersPage({ name, sneakers, filter }) {
    return (
        <>
            <Head>
                <title>{`${name[0].toUpperCase()}${name.slice(1)} New Collection- Restored Sneakers`}</title>
                <meta name='description' content={`Professionally restored sneakers from New ${name[0].toUpperCase()}${name.slice(1)} Collection. Save our planet by buying restored shoes.`} />
            </Head>
            <SneakerPage
                sneakers={sneakers}
                title={`New ${name[0].toUpperCase()}${name.slice(1)} Collection`}
                filterGroup='new'
                filter={filter}
            />
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { filter: 'autumn' } },
            { params: { filter: 'winter' } },
            { params: { filter: 'nike' } },
            { params: { filter: 'adidas' } },
            { params: { filter: 'puma' } }
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { filter } = params
    const { db } = await connectToDatabase()
    let name = filter
    let sneakersData

    if (filter === 'adidas' || filter === 'nike' || filter == 'puma') {
        sneakersData = await db.collection('products').aggregate([
            {
                $match: {
                    name: { $regex: `${filter[0].toUpperCase()}${filter.slice(1)}` },
                    addDate: { $gte: new Date(2019, 1) }
                }
            },
            { $limit: 18 }
        ]).toArray()
    } else {
        sneakersData = await db.collection('products').aggregate([
            {
                $match: {
                    tags: filter,
                    addDate: { $gte: new Date(2019, 1) }
                }
            },
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