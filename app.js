const chalk = require('chalk')
const geoCode = require('./geoCode')
const foreCast = require('./foreCast')


foreCast('-2.0763603681872','29.7630163282156',(err,data)=>{
    if(err){
        console.log(chalk.red.inverse(response.body.error.info))
    }else
    console.log(chalk.green.inverse(`${data.descr}! `) + `It is currently ${data.temp} degrees out, but it feels like ${data.feelsLike} degrees in.`)
})
// geoCode('muhanga rwanda',(err,data)=>{
//     if(err){
//         console.log(chalk.red.inverse(err))
//     }else
//     console.log(data.placeName + ', ' + data.latitude + ', ' + data.longitude)
// })