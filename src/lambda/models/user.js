import mongoose from 'mongoose'

const User = mongoose.model('User', {
    email: String,
    name: String
})

export default User