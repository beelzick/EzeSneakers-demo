import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '../../../lib/mongodb'
import bcrypt from 'bcrypt'

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const { db } = await connectToDatabase()
                const user = await db.collection('users').findOne({
                    email: credentials.email
                })
                if (!user) {
                    throw new Error('Invalid password or email')
                }

                const checkPassword = await bcrypt.compareSync(credentials.password, user.password)

                if (!checkPassword) {
                    throw new Error('Invalid password or email')

                }
                return { email: user.email }

            }
        })
    ]
})