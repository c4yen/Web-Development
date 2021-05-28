const request = require('postman-request')
const geocode = require('./utils/geocode')
// const access_key = 'fb7696779b87133f3b9471c959109ba2'
// const query = '44.389355,-79.690331'
// const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + query + "&units=m"

// request ({url: url, json: true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('Unable to find location:' + response.body.error)
//     }else{
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees outside. It feels like " + response.body.current.feelslike + " degrees outside.")
//     }
// })



geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})