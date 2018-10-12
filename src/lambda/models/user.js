import mongoose from 'mongoose'

const User = mongoose.Model('User', {
    email: String,
    name: String
})

export default User