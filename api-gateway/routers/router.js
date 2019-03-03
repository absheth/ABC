var express = require('express');
var router = express.Router();
var newsService = require('./newsService');
var feedService = require('./feedService');
var userService = require('./userService');

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
})

router.use(newsService);
router.use(feedService);
router.use(userService);

module.exports = router;
