import cache from 'simplecaching'
import axios from 'axios'

let counter = 1, msg = "hello "
cache.set("counter", counter, 5*60)

exports.handler = async (event, context) => {
    const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
    let res = await axios.get(url)
    let data = res.data
    let cout = cache.get("counter", 0)
    let response = { statusCode: 200, body: JSON.stringify({msg: msg+cout, ...data}) }
    return response
}