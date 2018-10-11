import ajax from './utils/index'

let counter = 0, msg = "hi "

exports.handler = async (event, context) => {
    const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
    let data = await ajax.getJson(url)
    let response = { statusCode: 200, body: JSON.stringify({msg: msg+counter++, ...data}) }
    return response
}