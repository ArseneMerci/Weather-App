const request = require('request')
const chalk = require('chalk')

// const weatherUrl = 'http://api.weatherstack.com/current?access_key=5a9a04d7ff075a6df8376fbe66a70c34&query=1.9403,29.8739'

// request({url: weatherUrl, json: true}, (err,response)=>{
//     if(err){
//         console.log('can not connect to Weather Server')
//     }
//     else if(response.body.error){
//         console.log(chalk.red.inverse(response.body.error.info))
//     }
//     else{
//         const path = response.body.current
//         console.log(chalk.green.inverse(`${path.weather_descriptions}! `) + `It is currently ${path.temperature} degrees out, but it feels like ${path.feelslike} degrees in.`)
//     }
// })

const MapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/gitarama.json?access_token=pk.eyJ1IjoiYXJzZW5lZGV2ZWxvcGVyIiwiYSI6ImNrb3N4ankxbzAwamEyd21sbnUxaXZmbTYifQ.hfvz-_cdVkkvbL7ilVvtjg&limit=1'

request({url:MapUrl, json:true},(err,response)=>{
    if(err){
        console.log(chalk.red.inverse('can not connect to Mapping server'))
    }
    else if(response.body.message){
        console.log(chalk.red.inverse('Enter Your Location'))
    }
    else if(response.body.features.length === 0){
        console.log(chalk.red.inverse('Location Not Found'))
    }
    else{
        let placeName = response.body.features[0].place_name
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(placeName + ', ' + latitude + ', ' + longitude)
    }
})