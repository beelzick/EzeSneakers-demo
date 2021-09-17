
import { connectToDatabase } from '../../lib/mongodb'

import SneakerPage from '../../components/sneakers-page/SneakersPage'

export default function Women({ sneakers }) {
    return <SneakerPage sneakers={sneakers} title='For Women' apiName='woman' />
}
export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { sex: 'woman' } },
        { $limit: 24 }
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}
