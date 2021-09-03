import nextConnect from 'next-connect'
import passport from './passport'
import database from './database'
import session from './session'

const all = nextConnect()

all
    .use(database)
    .use(session)
    .use(passport.initialize())
    .use(passport.session())

export default all