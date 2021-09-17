import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../lib/mongodb'



export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { apiName, lastId } = req.query
        const { db } = await connectToDatabase()
        if (apiName === 'man' || apiName === 'woman') {
            const sneakersData = await db.collection('products').aggregate([
                {
                    $match: {
                        $and: [
                            { sex: apiName },
                            { _id: { $gt: ObjectId(lastId) } }
                        ]
                    }
                },
                {
                    $limit: 24
                }
            ]).toArray()
            const hasMore = sneakersData.length < 24 ? false : true
            res.status(200).json({ data: sneakersData, hasMore })
        } else if (apiName === 'summer') {
            const sneakersData = await db.collection('products').aggregate([
                {
                    $match: {
                        $and: [
                            { tag: apiName },
                            { _id: { $gt: ObjectId(lastId) } }
                        ]
                    }
                },
                {
                    $limit: 24
                }
            ]).toArray()
            const hasMore = sneakersData.length < 24 ? false : true
            res.status(200).json({ data: sneakersData, hasMore })
        } else if (apiName === 'all') {
            const sneakersData = await db.collection('products').aggregate([
                {
                    $match: { _id: { $gt: ObjectId(lastId) } }
                },
                {
                    $limit: 24
                }
            ]).toArray()
            const hasMore = sneakersData.length < 24 ? false : true
            res.status(200).json({ data: sneakersData, hasMore })
        }

    } else {
        res.status(500)
    }
}