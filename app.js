const request = require('request')
const chalk = require('chalk')

const url = 'http://api.weatherstack.com/current?access_key=5a9a04d7ff075a6df8376fbe66a70c34&query=1.9403,29.8739'

request({url: url, json: true}, (err,response)=>{
    const path = response.body.current
    console.log(chalk.green.inverse(`${path.weather_descriptions}! `) + `It is currently ${path.temperature} degrees out, but it feels like ${path.feelslike} degrees in.`)
})