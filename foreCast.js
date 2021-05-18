const request = require('request')

const foreCast = (latitude,longitude,callback)=>{
    const weatherUrl = `http://api.weatherstack.com/current?access_key=5a9a04d7ff075a6df8376fbe66a70c34&query=${latitude},${longitude}`

    request({url: weatherUrl, json: true}, (err,response)=>{
        if(err){
            callback('can not connect to Weather Server', undefined)
        }
        else if(response.body.error){
            callback(response.body.error.info, undefined)
        }
        else{
            const path = response.body.current
            callback(undefined,{
                descr:path.weather_descriptions,
                temp:path.temperature,
                feelsLike:path.feelslike})
        }
    })
}
module.exports = foreCast