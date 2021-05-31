const path = require('path')
const express = require('express')
const hbs = require('hbs')

const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()

//define paths for Express Config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) =>{
    res.render('index', {
        title: 'Home Page',
        name: 'Joseph Yen'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'About Page',
        name: 'Joseph Yen'
    })
})
app.get('/help', (req, res) =>{
    res.render('about', {
        title: 'Help Page', 
        name: 'Joseph Yen'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return res.send({
                error: error
            })
        }

        forecast(latitude, longitude, (error, forecast) => {
            if (error){
                return res.send({
                    error: error
                })
            }
            res.send({
                location: location,
                address: req.query.address,
                forecast: forecast
            })
        })
    })

})

app.get('/help/*', (req, res) =>{
    res.render('404', {
        title: '404', 
        name: 'Joseph Yen',
        errorMsg: 'Help article Not Found'
    })
})

app.get('*', (req, res) =>{
    res.render('404', {
        title: '404', 
        name: 'Joseph Yen',
        errorMsg: 'Page Not Found'
    })
})

app.listen(3000, () =>{
    console.log('Server is up on port localhost:3000')
})
