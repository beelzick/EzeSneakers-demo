import { connectToDatabase } from '../../lib/mongodb'
import SneakersNewPage from '../../components/sneakers-page/SneakersNewPage'

export default function New({ sneakers }) {
    return <SneakersNewPage sneakers={sneakers} title='New Sneakers' />
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { addDate: { $gte: new Date(2019, 1) } } },
        { $sort: { addDate: -1 } },
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}