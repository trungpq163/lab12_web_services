const soap = require('soap');
const express = require('express');
const app = express();

const service = require('./services/BMI');

// XML data is extracted from wsdl file created
const xml = require('fs').readFileSync('./bmicalculator.wsdl', 'utf-8');

// http://localhost:3030/bmicalculator?wsdl
// Create an express server and pass it to soap server
soap.listen(app.listen(3030), '/bmicalculator', service, xml, function () {
    console.log('server initialized', xml);
});