import { connectToDatabase } from '../../../lib/mongodb'
import { getSession } from 'next-auth/react'
import { ObjectId } from 'bson'
export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(403)
    } else {
        const email = session.user.email
        const { db } = await connectToDatabase()
        const { productId } = req.body
        if (req.method === 'POST') {

            const favorite = await db.collection('products').findOne({ '_id': ObjectId(productId) })
            const user = await db.collection('users').findOneAndUpdate(
                { email },
                {
                    $push: {
                        'favorites': {
                            ...favorite,
                        }
                    }
                }
            )

            return res.status(200).json({ sucess: true })
        } else if (req.method === 'DELETE') {

            await db.collection('users').updateOne(
                { email: email },
                {
                    $pull: { favorites: { _id: ObjectId(productId) } },
                },
                {
                    new: false,
                    multi: true
                }
            )

            return res.status(200).json({ sucess: true })
        } else if (req.method === 'GET') {

            const favorites = await db.collection('users').aggregate([
                { $match: { email: email } },
                {
                    $project:
                    {
                        'favorites._id': 1,
                        'favorites.price': 1,
                        'favorites.name': 1,
                        'favorites.imgUrl': 1,
                        'cart': 1
                    }
                }
            ]).toArray()
            res.status(200).json({ data: favorites })
        }
    }

}