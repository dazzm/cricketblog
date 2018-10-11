
exports.handler = async (event, context) => {
    let response = { statusCode: 200, body: JSON.stringify({ msg: "hello from server"}) }
    return response
}