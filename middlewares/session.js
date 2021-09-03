import session from 'express-session'
import MongoStore from 'connect-mongo'

export default function sessionMiddleware(req, res, next) {
    try {
        const mongoStore = MongoStore.create({
            client: req.dbClient,
            stringify: false,
        })
        return session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            store: mongoStore
        })(req, res, next)
    } catch (error) {
        console.log(error)
    }
}