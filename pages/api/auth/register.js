import { connectToDatabase } from '../../../lib/mongodb'
import bcrypt from 'bcrypt'
import { getSession } from "next-auth/react"


const handler = async (req, res) => {
    const session = await getSession({ req })
    if (session) {
        res.status(403)
        return
    } else {
        if (req.method === 'POST') {
            const { db, client } = await connectToDatabase()
            const { email, password, birthDate } = req.body
            const date = new Date(birthDate)
            const checkExisting = await db.collection('users').findOne({ email })

            if (checkExisting) {
                res.status(422).json({ message: 'User already exists' })
                client.close()
                return
            }

            const hash = await bcrypt.hashSync(password, 12)
            const user = await db.collection('users').insertOne({
                ...req.body,
                birthDate: date,
                password: hash
            })
            res.status(201).json({ message: 'Account created', ...user })
            client.close()
            return
        } else {
            res.status(500).json({ message: 'Route not valid' })
            client.close()
            return
        }
    }

}

export default handler