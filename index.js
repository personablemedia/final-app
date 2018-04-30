const express = require('express');
const startServer = require('./server').startServer;
const proxy = require('http-proxy-middleware');

if (process.env.NODE_ENV === 'production') {
    startServer(undefined, process.env.PORT || 8080);
}
else {
    const app = express();
    app.use(proxy('http://localhost:3000/', {
        logLevel: 'warn', 
        ws: true, 
        router: {
            'localhost:8080/api': 'http://localhost:3001'
        }
    }));
    app.listen(process.env.PORT || 8080);
}