const http = require('http'); 
var express = require('express');
var app = new express();

//This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

//This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  })

//this route will take anyc  character in the stars place.
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
  })
  
// MAtch anything starting with "a"
//app.get(/a/, function (req, res) {
 //   res.send('/a/')
 // })

//route parameters
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })



  app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from B!')
  })

  var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!')
  }

app.get('/example/c', [cb0,cb1,cb2])

app.get('/download', function(req,res){
    
    res.download('./abc.txt');
})

app.get('/json', (req,res)=>{
    res.json({user:'tom', type:'admin'});
});

app.get('/redirect' , (req,res) =>{
    res.redirect('http://expressjs.com');
});

var server = app.listen(3001, function(){
    console.log('node server is running');
    
});