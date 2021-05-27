const request = require('postman-request')

// const access_key = 'fb7696779b87133f3b9471c959109ba2'
// const query = '44.389355,-79.690331'
// const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + query + "&units=m"

// request ({url: url, json: true}, (error, response) => {
//     //console.log(response.body.current)
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees outside. It feels like " + response.body.current.feelslike + " degrees outside.")
// })


/**
 * Geocoding
 * Address -> Lat/Long -> Weather
 * Goal: Print Lat/Long for Los Angeles
 * 1. Fire off a new request to the URL explored in browser
 * 2. Have the request module parse it as JSON
 * 3. Print both the latitude and longitude to the terminal
 * 4. Test your work!
 */
const mapBoxAccessKey = "pk.eyJ1Ijoic2hpdmFuZCIsImEiOiJja3A3N3QyeXIwYTRhMnpuNjV0N2M3anYyIn0.FhMOLcf7dnJbe7fKATrVRA"
//const mapBoxQuery = 
const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + mapBoxAccessKey

request({url: mapBoxUrl, json: true}, (error, response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(longitude+ "," + latitude)
})
