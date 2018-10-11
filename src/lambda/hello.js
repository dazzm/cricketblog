
exports.handler = (event, context, callback) => {
    let response = { statusCode: 200, body: JSON.stringify({ msg: "hello from server"}) }
    callback(null, response)
}