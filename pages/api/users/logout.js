import nextConnect from 'next-connect'
import all from '../../../middlewares/all'
const handler = nextConnect()

handler.use(all)

handler.get((req, res) => {
    try {
        req.logout()
        res.send({ sucess: true })
    } catch (error) {
        res.send({ sucess: false })
        console.log(error)
    }
})

export default handler