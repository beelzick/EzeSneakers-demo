import { connectToDatabase } from '../../lib/mongodb'
import SneakerPage from '../../components/SneakersPage'


export default function Men({ sneakers }) {
    return <SneakerPage sneakers={sneakers} title='For Men' apiName='man' />
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { sex: 'man' } },
        { $limit: 48 }
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}


