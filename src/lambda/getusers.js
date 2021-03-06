import connectToDatabase from './utils/db'
import User from './models/user'

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase()
    let users = await User.find()
    let response = { statusCode: 200, body: JSON.stringify(users) }
    return response
}