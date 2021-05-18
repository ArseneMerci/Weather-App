const request = require('request')

const geoCode = (location, callback)=>{
    const MapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiYXJzZW5lZGV2ZWxvcGVyIiwiYSI6ImNrb3N4ankxbzAwamEyd21sbnUxaXZmbTYifQ.hfvz-_cdVkkvbL7ilVvtjg&limit=1`
    request({url:MapUrl, json:true},(err,response)=>{
        if(err){
            callback('can not connect to Mapping server')
        }
        else if(response.body.message){
            callback('Enter Your Location')
        }
        else if(response.body.features.length === 0){
            callback('Location Not Found')
        }
        else{
            let placeName = response.body.features[0].place_name
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            callback(undefined,{
                latitude,placeName,longitude
            })
        }
    })
}
module.exports = geoCode