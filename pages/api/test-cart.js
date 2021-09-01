import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
    const { db } = await connectToDatabase()
    if (req.method === 'GET') {
        try {
            const testItemsData = await db.collection('products').find({}).limit(5).toArray()
            const testItems = JSON.parse(JSON.stringify(testItemsData))
            return res.json({ sucess: true, data: testItems })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ sucess: false })
        }
    }
}