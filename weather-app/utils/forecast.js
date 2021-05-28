const request = require('postman-request')

const forecast = (latitude, longitude, callback) =>{
    const access_key = 'fb7696779b87133f3b9471c959109ba2'
    const query = latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + query + "&units=m"
    request({url: url, json:true}, (error, response) =>{
     if (error){
         callback('Unable to connect to weather service!', undefined)
     }else if(response.body.error){
         callback('Unable to find location:' + response.body.error, undefined)
     }else{
         callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees outside. It feels like " + response.body.current.feelslike + " degrees outside.")
     }
    })
}

module.exports = forecast