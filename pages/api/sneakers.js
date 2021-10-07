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
                            { gender: apiName },
                            { _id: { $gt: ObjectId(lastId) } }
                        ]
                    }
                },
                {
                    $limit: 20
                }
            ]).toArray()
            const hasMore = sneakersData.length < 20 ? false : true
            res.status(200).json({ data: sneakersData, hasMore })

        } else if (apiName === 'season') {
            const sneakersData = await db.collection('products').aggregate([
                {
                    $match: {
                        $and: [
                            {
                                $or: [
                                    { tags: 'winter' },
                                    { tags: 'summer' },
                                    { tags: 'autumn' },
                                    { tags: 'spring' },
                                ]
                            },
                            { _id: { $gt: ObjectId(lastId) } }
                        ]
                    }
                },
                {
                    $limit: 20
                }
            ]).toArray()
            const hasMore = sneakersData.length < 20 ? false : true
            res.status(200).json({ data: sneakersData, hasMore })

        } else if (apiName === 'all') {
            const sneakersData = await db.collection('products').aggregate([
                {
                    $match: { _id: { $gt: ObjectId(lastId) } }
                },
                {
                    $limit: 20
                }
            ]).toArray()
            const hasMore = sneakersData.length < 20 ? false : true
            res.status(200).json({ data: sneakersData, hasMore })
        }

    } else {
        res.status(500)
    }
}