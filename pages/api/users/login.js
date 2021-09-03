import nextConnect from 'next-connect'
import all from '../../../middlewares/all'
import passport from '../../../middlewares/passport'

const handler = nextConnect()

handler.use(all)



handler.post(passport.authenticate('local'), (req, res) => {
    try {
        res.send({ sucess: true })
    } catch (error) {
        console.log(error)
        res.send({ sucess: false })
    }
})

export default handler