let jwt = require('jsonwebtoken');

let rout = require('express').Router();
let ctrl = require('../controlers/Ctrl');
let Ctrl = new ctrl();

rout.post('/addComment', (req, res) => {
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey').subject;
    Ctrl.addComment(payload, req.body).then((result) => {
        res.send(result);
    })
});
rout.post('/getCommments', (req, res) => {
    Ctrl.getComments(req.body.item).then((comments)=>{
        res.send(comments);
    })

});
module.exports = rout;