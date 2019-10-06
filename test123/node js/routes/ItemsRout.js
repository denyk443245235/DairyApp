let rout = require('express').Router();
let controler = require('../controlers/Ctrl');
let Controler = new controler();
rout.post('/addItem', (req, res) => {
    Controler.addItem(req.body.item).then((result) => {
        res.send(result);
    });
});
rout.get('/getItem', (req, res) => {
    Controler.getItem().then((result) => {
        setTimeout(() => {
            res.send(result);
        }, 500);

    })
})
rout.post('/delete', (req, res) => {
    let id = req.body.id;
    Controler.delete(id).then((result) => {

        res.send(result);
    })
})
module.exports = rout;