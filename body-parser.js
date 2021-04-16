const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');

const correct = {name: 'Shankar', password: "pass"} 



app.response.sendStatus = function(statusCode, type, message){
    return this.contentType(type)
                .status(statusCode)
                .send(message + statusCode)
}

app.get('/', function(req,res){
    
    res.sendFile('body-parserform.html', {root:'.'});
    (res.sendStatus(200, 'application/json', '{"error":"resource not found"}'));
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res){
   console.log(req.body);
   //res.send("recieved your request!");
   if(req.body.name == correct.name && req.body.name2 == correct.password){
    res.sendFile('welcome.html', {root:'.'});
   }
   else{
    res.sendFile('error.html', {root:'.'});
   }
});




app.listen(3000, function(){
    console.log('body-parser running');

});