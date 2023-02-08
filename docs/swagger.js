const swaggerAutogen = require('swagger-autogen')();
const doc = require('./config/swagger');

const outputFile = './swagger_documentation.json';
const endpoints = ['../app/routes.js'];

swaggerAutogen(outputFile, endpoints, doc);