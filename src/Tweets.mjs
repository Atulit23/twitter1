import mongoose from 'mongoose'

const schema = mongoose.Schema({
    tweet: String,
    topic: String,
    images: Array,
    comments: Array,
    likes: String
})

export default mongoose.model('Tweets', schema)
