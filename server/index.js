'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const morgan = require('morgan'); //for logging
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8080;

//create instance of express
const app = express();

//initiate middleware from the CLIENT folder
app.use(express.static(path.resolve(__dirname,'..client')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('common'));
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});

app.get('/api', (req,res) => { res.send('Test'); });


//even the endpts that are /api send them back to index
//return data to a single page app
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});
app.use('*', (req, res) => { 
    return res.status(404).json({message: 'Not Found'}); 
});

const startServer = function(dbURL,port = PORT) {
    //do connection for your mysql

    //if unable to connect to mysql don't start the server

    
    app.listen(port, () => {
        console.log('Your app listening on port: ' + port);
    });
    console.log('The path is: ' + path.resolve(__dirname, '../client/build', 'index.html'));
};

module.exports = {startServer};










