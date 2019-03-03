var express = require('express');
var router = express.Router();
const apiAdapter = require('./apiAdapter');
const BASE_URL = 'http://users.service.consul'

const api = apiAdapter(BASE_URL);
router.post('/login', (req, res) => {
    res.send(req.path + " called");
})

router.post('/', (req, res) => {
    // res.status(200).send("Success");
    api.post(req.path).then(resp => {
        res.send(resp.data);
    })
})

router.post('/search', (req, res) => {
    // res.status(200).send("Success");
    api.post(req.path).then(resp => {
        res.send(resp.data);
    })
})

router.post('/:userId', (req, res) => {
    var userId = req.params.userId;
    // res.status(200).send(req.path);
    api.post(req.path).then(resp => {
        res.send(resp.data);
    })
})

module.exports = router
