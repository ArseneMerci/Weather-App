const request = require('request')

const foreCast = (latitude,longitude,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=5a9a04d7ff075a6df8376fbe66a70c34&query=${latitude},${longitude}`

    request({url, json: true}, (err,{body})=>{
        if(err){
            callback('can not connect to Weather Server', undefined)
        }
        else if(body.error){
            callback(body.error.info, undefined)
        }
        else{
            const {current} = body

            if(current.is_day){
                current.is_day = 'day'
            }else current.is_day = 'night'
            
            callback(undefined,{
                descr:current.weather_descriptions,
                temp:current.temperature,
                feelsLike:current.feelslike,
                isDay:current.is_day,
                icon:current.weather_icons[0]
            })
        }
    })
}
module.exports = foreCast