import nextConnect from 'next-connect'
import all from '../../../middlewares/all'

const handler = nextConnect()

handler.use(all)

handler.get(async (req, res) => {
    res.json({ hi: 'hello' })
})

export default handler