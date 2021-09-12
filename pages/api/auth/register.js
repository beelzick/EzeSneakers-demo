import { connectToDatabase } from '../../../lib/mongodb'
import bcrypt from 'bcrypt'
import { getSession } from "next-auth/react"


export default async function handler(req, res) {
    const session = await getSession({ req })
    try {
        if (session) {
            res.status(403)
            return
        } else {
            if (req.method === 'POST') {
                const { db } = await connectToDatabase()
                const { email, password, birthDate } = req.body
                const date = new Date(birthDate)
                const checkExisting = await db.collection('users').findOne({ email })

                if (checkExisting) {
                    res.status(422).json({ message: 'User already exists' })
                    return
                }

                const hash = await bcrypt.hashSync(password, 12)
                const user = await db.collection('users').insertOne({
                    ...req.body,
                    birthDate: date,
                    password: hash,
                    cart: [],
                    favorites: []
                })

                res.status(201).json({ message: 'Account created', ...user })
                return

            } else {
                res.status(500).json({ message: 'Route not valid' })
                return
            }
        }
    } catch (error) {
        console.log(error)
    }


}