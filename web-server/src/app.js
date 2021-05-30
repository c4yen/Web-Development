const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
    res.send('Weather Page')
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
