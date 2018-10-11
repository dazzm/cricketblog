import fetch from 'node-fetch'

exports.handler = async (event, context) => {
    const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
    let res = await fetch(url)
    let data = await res.json()
    let response = { statusCode: 200, body: JSON.stringify({msg: "hi", ...data}) }
    return response
}