const http = require('http')

const address = "130 Hurst Drive"
const mapBoxAccessKey = "pk.eyJ1Ijoic2hpdmFuZCIsImEiOiJja3A3N3QyeXIwYTRhMnpuNjV0N2M3anYyIn0.FhMOLcf7dnJbe7fKATrVRA"
const mapBoxUrl = "http://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=" + mapBoxAccessKey

const request = http.request(mapBoxUrl, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        
    })

    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) =>{
    console.log('An error', error)
})

request.end()

