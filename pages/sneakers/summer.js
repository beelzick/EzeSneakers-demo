import { connectToDatabase } from '../../lib/mongodb'
import SneakerPage from '../../components/sneakers-page/SneakersPage'

export default function Summer({ sneakers }) {
    return <SneakerPage sneakers={sneakers} title='Summer Collection' apiName='summer' />

}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { tag: 'summer' } },
        { $limit: 24 }
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}
