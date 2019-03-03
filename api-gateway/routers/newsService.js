var express = require('express');
var router = express.Router();

const apiAdapter = require('./apiAdapter');
const BASE_URL = 'http://news.service.consul'
const api = apiAdapter(BASE_URL);


router.get('/', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
})

router.get('/top_headlines', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
})

module.exports = router
