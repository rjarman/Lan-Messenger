const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const _localStorage = require('../models/localStorage');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.post('/login', (req, res, next) => {
    // res.send('<h1>Hello From Server!</h1>');
    console.log(req.body);
    if(_localStorage.loginData(req.body)) {
        res.status(201).json({
            status: 'ok'
        });
    } else {
        res.status(201).json({
            status: 'not found'
        });
    }
});

app.post('/register', (req, res, next) => {
    // res.send('<h1>Hello From Server!</h1>');
    console.log(req.body);
    if(_localStorage.registerData(req.body)) {
        res.status(201).json({
            status: 'ok'
        });
    } else {
        res.status(201).json({
            status: 'failed'
        });
    }
});

app.post('/getOnlineUser', (req, res, next) => {
    data = _localStorage.getOnlineUser();
    res.status(200).json({
        data: data
    });
});

module.exports = app;