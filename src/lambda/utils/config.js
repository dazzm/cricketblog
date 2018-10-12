import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
mongoose.Promise = global.Promise
let isConnected = false

const getDB = async () => {
    if(isConnected){
        console.log("using existig db connection")
        return Promise.resolve()
    }
    console.log("using new db connection")
    let db = await mongoose.connect(process.env.DB)
    isConnected = db.connection[0].readyState
}

export default getDB