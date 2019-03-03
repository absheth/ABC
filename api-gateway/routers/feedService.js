var express = require('express');
var router = express.Router();
const apiAdapter = require('./apiAdapter');


const BASE_URL = 'http://feed.service.consul'
const api = apiAdapter(BASE_URL);
router.get('/feed/create/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
})

router.post('/tweet/create', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data);
    })
})

module.exports = router
