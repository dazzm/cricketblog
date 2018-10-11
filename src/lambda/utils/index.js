import fetch from 'node-fetch'

const ajax = {
    getJson: async (url, params=null) => {
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
}

export default ajax