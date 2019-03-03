var express = require('express');
var app = express();
var router = require('./routers/router');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send("Simple API Gateway");
})

// app.use(router);
const user = require('./routers/userService')
const news = require('./routers/newsService')
const feed = require('./routers/feedService')

app.use('/users', user)
app.use('/news', news)
app.use('/feed', feed)
console.log("Simple API gateway run on localhost:3001");

app.listen(3001);


