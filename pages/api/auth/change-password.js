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
            const { db } = await connectToDatabase()
            const { oldPassword, newPassword } = req.body
            const { email } = session.user

            const user = await db.collection('users').findOne({
                email
            })

            const checkOldPassword = await bcrypt.compareSync(oldPassword, user.password)

            if (!checkOldPassword) {
                res.status(401).json({ message: 'Invalid old Password' })
            } else {
                const hash = await bcrypt.hashSync(newPassword, 12)
                const user = await db.collection('users').findOneAndUpdate(
                    { email },
                    { $set: { password: hash } }
                )
                if (user.ok) {
                    res.status(200).json({ success: true, message: 'Password successfully updated' })
                } else {
                    res.status(500).json({ message: 'Couldn\'t update your password' })
                }
            }
            return
        } else {
            res.status(500).json({ message: 'Route not valid' })
            return
        }
    }
}