import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'
const UserSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    birthDate: Date
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

export default mongoose.models.User || mongoose.model('User', UserSchema)
