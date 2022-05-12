const express = require('express');
const bodyParser = require('body-parser');
const { services } = require('./services/services');

const app = express();

app.use(bodyParser.json());

// Configure headers and cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

require('./routes')(app,services());

app.listen(3200, () => {
    console.log('Server running in localhost:3200');
});