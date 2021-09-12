import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '../../../lib/mongodb'
import bcrypt from 'bcrypt'

const JWT_SIGNING_PRIVATE_KEY = process.env.JWT_SIGNING_PRIVATE_KEY

export default NextAuth({
    session: {
        jwt: true
    },
    jwt: {
        signingKey: JWT_SIGNING_PRIVATE_KEY
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const { db } = await connectToDatabase()
                const user = await db.collection('users').findOne({
                    email: credentials.email
                })
                if (!user) {
                    throw new Error('Invalid email or password')
                }

                const checkPassword = await bcrypt.compareSync(credentials.password, user.password)

                if (!checkPassword) {
                    throw new Error('Invalid email or password')
                }

                return { email: user.email }
            }
        })
    ],
    debug: true
})