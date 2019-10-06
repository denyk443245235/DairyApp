let rout = require('express').Router();
let ctrl = require('../controlers/Ctrl');
let Ctrl = new ctrl();
rout.post('/login', (req, res) => {
    Ctrl.login(req.body).then((result) => {
        res.send(result);
    });
});
rout.post('/register', (req, res) => {
    Ctrl.register(req.body).then((result) => {
        res.send(result);
    });
});
module.exports = rout;