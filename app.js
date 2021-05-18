const chalk = require('chalk')
const geoCode = require('./geoCode')
const foreCast = require('./foreCast')
const location = require('./location')

if(!location){
    console.log(chalk.yellow.inverse('Please provide your location!'))
}else{
geoCode(location,(err,data)=>{
    if(err)return console.log(chalk.red.inverse(err))
    foreCast(data.latitude,data.longitude,(err,forecastData)=>{
        if(err) return console.log(chalk.red.inverse(response.body.error.info))
        console.log(data.placeName)
        console.log(chalk.green.inverse(`${forecastData.descr}! `) + `It is currently ${forecastData.temp} degrees out, but it feels like ${forecastData.feelsLike} degrees in.`)
    })
})}
