import mongoose from 'mongoose'

const schema = mongoose.Schema({
    name: String,
    dob: String,
    bio: String,
    dp: String,
    username: String,
    email: String
})

export default mongoose.model('Profile', schema)
