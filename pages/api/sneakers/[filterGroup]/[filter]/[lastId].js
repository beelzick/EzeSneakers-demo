import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../../../../lib/mongodb'

export default async function handler(req, res) {
    const { filterGroup, filter, lastId } = req.query
    const { db } = await connectToDatabase()

    let sneakersData = {}
    let hasMore = false

    if (req.method === 'GET') {
        switch (filterGroup) {
            case 'men':
                switch (filter) {
                    case 'most-rated':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    rating: { $gte: 4.8 },
                                    gender: 'man',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()
                        break
                    case 'new':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    addDate: { $gte: new Date(2019, 1) },
                                    gender: 'man',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $sort: { addDate: -1 } },
                            { $limit: 18 }
                        ]).toArray()
                        break
                    case 'adidas':
                    case 'nike':
                    case 'reebok':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    name: { $regex: `${filter[0].toUpperCase()}${filter.slice(1)}` },
                                    gender: 'man',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()
                        break
                    default:
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    tags: filter,
                                    gender: 'man',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()
                        break
                }
            case 'women':
                switch (filter) {
                    case 'most-rated':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    rating: { $gte: 4.8 },
                                    gender: 'woman',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()
                        break
                    case 'women-love':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    tags: 'women love',
                                    gender: 'woman',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            }
                        ]).toArray()
                        break
                    case 'new':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    addDate: { $gte: new Date(2019, 1) },
                                    gender: 'woman',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $sort: { addDate: -1 } },
                            { $limit: 18 }
                        ]).toArray()
                        break
                    case 'adidas':
                    case 'nike':
                    case 'reebok':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    name: { $regex: `${filter[0].toUpperCase()}${filter.slice(1)}` },
                                    gender: 'woman',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()
                        break
                    default:
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    tags: filter,
                                    gender: 'woman',
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()
                        break
                }
            case 'new':
                switch (filter) {
                    case 'adidas':
                    case 'nike':
                    case 'reebok':
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    name: { $regex: `${filter[0].toUpperCase()}${filter.slice(1)}` },
                                    addDate: { $gte: new Date(2019, 1) },
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()
                        break
                    default:
                        sneakersData = await db.collection('products').aggregate([
                            {
                                $match: {
                                    tags: filter,
                                    addDate: { $gte: new Date(2019, 1) },
                                    _id: { $gt: ObjectId(lastId) }
                                }
                            },
                            { $limit: 18 }
                        ]).toArray()

                }
        }
        hasMore = sneakersData.length < 18 ? false : true
        res.status(200).json({ data: sneakersData, hasMore })
    } else {
        res.status(500)
    }
}