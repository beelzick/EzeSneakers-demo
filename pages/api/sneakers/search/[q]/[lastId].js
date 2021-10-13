import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../../../../lib/mongodb'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { db } = await connectToDatabase()
        const { q, lastId } = req.query

        const sneakersData = await db.collection('products').aggregate([
            {
                $search: {
                    index: 'products',
                    compound: {
                        should: [
                            { autocomplete: { query: q, path: 'name', fuzzy: { maxEdits: 2, } } },
                            { autocomplete: { query: q, path: 'price', fuzzy: { maxEdits: 2, } } },
                            { autocomplete: { query: q, path: 'rating', fuzzy: { maxEdits: 2, } } },
                            { autocomplete: { query: q, path: 'gender', fuzzy: { maxEdits: 2, } } },
                            { autocomplete: { query: q, path: 'tags', fuzzy: { maxEdits: 2, } } },
                        ]
                    }
                },
            },
            { $match: { _id: { $gt: ObjectId(lastId) } } },
            { $limit: 18 }
        ]).toArray()

        const hasMore = sneakersData.length < 18 ? false : true
        res.status(200).json({ data: sneakersData, hasMore })
    } else {
        res.status(500)
    }
}