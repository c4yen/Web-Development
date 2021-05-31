const request = require('postman-request')
const geocode = (address, callback) => {
    const mapBoxAccessKey = "pk.eyJ1Ijoic2hpdmFuZCIsImEiOiJja3A3N3QyeXIwYTRhMnpuNjV0N2M3anYyIn0.FhMOLcf7dnJbe7fKATrVRA"
    const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=" + mapBoxAccessKey
    request({url: mapBoxUrl, json:true}, (error, {body}) =>{
        if (error){
            callback('Unable to connect to location services!', undefined)
        }else if (body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode