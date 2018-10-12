import getDB from './utils/config'
import User from './models/user'

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    await getDB()
    let user = new User({ name: 'shams '+counter++, email: "dev@daz.com"})
    await user.save()
    let users = await User.find({}).lean()
    let response = { statusCode: 200, body: JSON.stringify(users) }
    return response
}