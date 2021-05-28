const request = require('request')

const geoCode = (location, callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiYXJzZW5lZGV2ZWxvcGVyIiwiYSI6ImNrb3N4ankxbzAwamEyd21sbnUxaXZmbTYifQ.hfvz-_cdVkkvbL7ilVvtjg&limit=1`
    request({url, json:true},(err,{body})=>{
        if(err){
            callback('can not connect to Mapping server')
        }
        else if(body.message){
            callback('Enter Your Location')
        }
        else if(body.features.length === 0){
            callback('Location Not Found')
        }
        else{
            const location = body.features[0].place_name
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            callback(undefined,{
                latitude,location,longitude
            })
        }
    })
}
module.exports = geoCode