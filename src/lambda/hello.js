import cache from 'simplecaching'
import ajax from './utils/index'

let counter = 1, msg = "hello "
cache.set("counter", counter, 5*60)

exports.handler = async (event, context) => {
    const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
    let data = await ajax.getJson(url)
    let cout = cache.get("counter")
    let response = { statusCode: 200, body: JSON.stringify({msg: msg+cout, ...data}) }
    return response
}