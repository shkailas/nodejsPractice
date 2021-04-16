const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log("pug-template-server listening");
})

app.set('views', './views')
app.set('view engine','pug')

app.get('/',function(req,res){
    res.render('index',{title:'Hey', message:'hello world', numbers: ['a','b','c']})
})