const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { argv } = require('process')


if (argv.length <= 2){
    console.log("Provide an address")
}else{
    geocode(argv[2], (error, data) => {
        if (error){
            return console.log(error)
        }
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
       })
    })
}


