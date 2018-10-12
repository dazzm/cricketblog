import cache from 'simplecaching'
import axios from 'axios'

let counter = 1, msg = "hello "

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
    let res = await axios.get(url)
    let data = res.data
    let response = { statusCode: 200, body: JSON.stringify({msg: msg+counter, ...data}) }
    return response
}