const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) =>{
    try {
        res.sendStatus(200)
    }
    catch{
        res.sendStatus(400)
    }
})

app.all('*', (req, res) => {
    res.sendStatus(404)
})
module.exports = app