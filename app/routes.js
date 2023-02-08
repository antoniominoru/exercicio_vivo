const express = require('express')
const percentChocolate = require('./app')
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger_documentation.json');

const app = express()


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/:id', (req, res) => {
    /*
        #swagger.description = 'Route for take the Percent of chocolate.'
    */

    try {
        res.status(200).send(percentChocolate(req.params.id))
    }
    catch {
        res.sendStatus(400)
    }
})

app.all('*', (req, res) => {
    res.sendStatus(404)
})
module.exports = app