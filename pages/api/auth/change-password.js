import { connectToDatabase } from '../../../lib/mongodb'
import bcrypt from 'bcrypt'
import { getSession } from 'next-auth/react'


export default async function handler(req, res) {
    const session = await getSession({ req })
    if (!session) {
        res.status(401)
        return
    } else {
        if (req.method === 'PATCH') {
            const { db, client } = await connectToDatabase()
            const { newPassword } = req.body
            const hash = await bcrypt.hashSync(newPassword, 12)
            const user = await db.collection('users').findOneAndUpdate(
                { email: session.user.email },
                { $set: {password: hash} }
            )
            res.status(200).json({ message: 'Password updated'})
            return client.close()
        } else {
            res.status(500).json({ message: 'Route not valid' })
            return clietn.close()
        }
    }
}