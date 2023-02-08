const express = require('express')
const percentChocolate = require('./app')

const app = express()

app.use(express.json())

app.get('/api/:id', (req, res) =>{
    try {
        res.status(200).send(percentChocolate(req.params.id))
    }
    catch{
        res.sendStatus(400)
    }
})

app.all('*', (req, res) => {
    res.sendStatus(404)
})
module.exports = app