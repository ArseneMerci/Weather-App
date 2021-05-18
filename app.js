const chalk = require('chalk')
const geoCode = require('./geoCode')
const foreCast = require('./foreCast')
const location = require('./location')

if(!location){
    console.log(chalk.yellow.inverse('Please provide your location!'))
}else{
geoCode(location,(err,{placeName,latitude,longitude})=>{
    if(err)return console.log(chalk.red.inverse(err))
    foreCast(latitude,longitude,(err,{descr,temp,feelsLike})=>{
        if(err) return console.log(chalk.red.inverse(response.body.error.info))
        console.log(placeName)
        console.log(chalk.green.inverse(`${descr}! `) + `It is currently ${temp} degrees out, but it feels like ${feelsLike} degrees in.`)
    })
})}
