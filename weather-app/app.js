const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { argv } = require('process')


if (argv.length <= 2){
    console.log("Provide an address")
}else{
    geocode(argv[2], (error, {latitude, longitude, location} = {}) => {
        if (error){
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
       })
    })
}


