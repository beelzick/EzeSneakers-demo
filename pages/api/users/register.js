import nextConnect from 'next-connect'
import all from '../../../middlewares/all'
import User from '../../../models/User'
import dbConnect from '../../../lib/mongoose'

const handler = nextConnect()

handler.use(all)

handler.post(async (req, res) => {
    try {
        await dbConnect()
        const { fName, lName, email, password, date } = req.body
        const birthDate = new Date(JSON.parse(date))
        const user = await new User({ fName, lName, email, birthDate });
        const registeredUser = await User.register(user, password);
        res.send({ sucess: true, data: registeredUser })
    }
    catch (error) {
        console.log(error)
        res.send({ sucess: false })
    }
})

export default handler