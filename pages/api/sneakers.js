import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { apiName, lastId } = req.query
        const { db } = await connectToDatabase()

        let sneakersData = {}
        let hasMore = false
        switch (apiName) {
            case 'man':
            case 'woman':
                sneakersData = await db.collection('products').aggregate([
                    {
                        $match: {
                            gender: apiName,
                            _id: { $gt: ObjectId(lastId) }
                        }
                    },
                    {
                        $limit: 18
                    }
                ]).toArray()
                break;
            case 'season':
                sneakersData = await db.collection('products').aggregate([
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
                        $limit: 18
                    }
                ]).toArray()
                break;
            case 'all':
                sneakersData = await db.collection('products').aggregate([
                    {
                        $match: { _id: { $gt: ObjectId(lastId) } }
                    },
                    {
                        $limit: 18
                    }
                ]).toArray()
                break
        }
        hasMore = sneakersData.length < 18 ? false : true
        res.status(200).json({ data: sneakersData, hasMore })
    } else {
        res.status(500)
    }
}