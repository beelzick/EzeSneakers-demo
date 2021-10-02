import SneakersSearchPage from '../../components/sneakers-page/SneakersSearchPage'
import { connectToDatabase } from '../../lib/mongodb'
import Head from 'next/head'

export default function QueryPage({ sneakers, q }) {
    return <>
        <Head>
            <title>Search results for {q}</title>
        </Head>
        <SneakersSearchPage sneakers={sneakers} q={q} title={`Results for "${q}"`} />
    </>
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { db } = await connectToDatabase()
    const { q } = context.params

    const sneakersData = await db.collection('products').aggregate([
        {
            $search: {
                index: 'products',
                compound: {
                    should: [
                        { autocomplete: { query: q, path: 'name' } },
                        { autocomplete: { query: q, path: 'price' } },
                        { autocomplete: { query: q, path: 'description' } },
                        { autocomplete: { query: q, path: 'rating' } },
                        { autocomplete: { query: q, path: 'sex' } },
                        { autocomplete: { query: q, path: 'tag' } },
                    ]
                }
            }
        },
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))

    return {
        props: {
            sneakers,
            q
        }
    }
}