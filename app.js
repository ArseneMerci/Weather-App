const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=5a9a04d7ff075a6df8376fbe66a70c34&query=1.9403,29.8739'

request({url: url}, (err,response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})