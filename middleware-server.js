const express = require('express')
const app = express()

const myLogger = function(req, res, next){
    console.log("LOGGED");
    next()
}
const requestTime = function(req, res, next){
    req.requestTime = Date(Date.now()).toString();
    next();
}
app.use(myLogger);
app.use(requestTime);
app.use('/user/:id', function(req, res, next){
    console.log('Request Type:', req.method)
    console.log('requet url', req.originalUrl)
    next()
})

app.get('/', function(req,res){
    let responseText = 'Hello World!<br>'
    responseText+= '<small>Requested at:' + req.requestTime + '</small>'
    res.send(responseText)
})

app.get('/user/:id', function(req, res){
    res.send("user");
})





//server is listening
app.listen(3000, function(){
    console.log('middleware server running');

});