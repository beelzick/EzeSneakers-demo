import { connectToDatabase } from '../../lib/mongodb'
import { hash } from 'bcryptjs'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email, password, fName, lName, date } = req.body
    }
}

export default handler