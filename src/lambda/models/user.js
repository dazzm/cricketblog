import mongoose from 'mongoose'

const User = mongoose.Model('User', {
    email: { type: String, required: true},
    name: { type: String}
})

export default User