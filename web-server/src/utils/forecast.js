const request = require('postman-request')

const forecast = (latitude, longitude, callback) =>{
    const access_key = 'fb7696779b87133f3b9471c959109ba2'
    const query = latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + query + "&units=m"
    request({ url, json:true}, (error, {body}) =>{
     if (error){
         callback('Unable to connect to weather service!', undefined)
     }else if(body.error){
         callback('Unable to find location:' + body.error, undefined)
     }else{
         callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees outside. It feels like " + body.current.feelslike + " degrees outside. The humidity is " + body.current.humidity + "%.")
     }
    })
}

module.exports = forecast