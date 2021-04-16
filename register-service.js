const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');


var mysql = require('mysql');
const e = require('express');
const { isBuffer } = require('util');
const { response } = require('express');



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true,
    database:"demodb"
  });
  


app.listen(3000, function(){
    console.log("register-server listening");
})
app.get('/', function(req,res){
    console.log('app.get')
    res.sendFile('loginFormDemodb.html', {root:'.'});
})
app.get('/register', function(req,res){
    console.log('app.get')
    res.sendFile('demodbForm.html', {root:'.'});
})
app.get('/home', function(req,res){
    console.log('app.get')
    res.sendFile('welcome.html', {root:'.'});
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', function(req, res){
    console.log(req.body)
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    con.connect(function(err){
        let q = "INSERT into users(id,name,email,password) values("+id+",'"+name+"','"+email+"','"+password+"')"
        con.query(q,function(err,results,fields){
            if(err){
                throw err;
            }
            console.log("user created")
        })
    })
    res.sendFile('loginFormDemodb.html', {root:'.'});
})
app.post('/login',function(req, res){
    let email = req.body.email;
    let password = req.body.password;
    con.connect(function(err){
        let q = "SELECT * FROM users WHERE email = '"+email+"' and password = '"+password+"'";
        con.query(q, function(err, results,fields){
            if(err){
                throw err;
            }
            if(results.length>0){
                console.log(results);
                res.sendFile('welcome.html', {root:'.'});
            }
            else{
                res.sendFile('loginFormDemodb.html', {root:'.'});
            }
        })
    })
    console.log('logged in');
})

app.post('/search', function(req, res){
    let search = req.body.search;
    con.connect(function(err){
        let q = "SELECT * FROM users WHERE name like '%"+search+"%' or email = '%"+search+"%'";
        con.query(q, function(err, results,fields){
            if(err){

                throw err;
            }
            if(results.length>0){
                userNames = []
                let html = '<table border="1">';
                for(let i = 0; i<results.length;i++){
                    user = {}
                    user.id = results[i].id;
                    user.name = results[i].name;
                    user.email = results[i].email;
                    userNames.push(user); 
                    /*
                    html +=  '<tr><td>'+ results[i].id+'</td><td>'+
                                 results[i].name+'</td><td>'+results[i].email+
                                 '</td></tr>';
                                 */
                    //console.log(results[i])
                }
                /*html+="</table><br><form action = '/home' method='GET'>";
                html+="<div><button>Back To Home!</button> </div></form>";*/
                res.render('./table.pug',{userNames:userNames})
                //res.setHeader('content-type', 'text/html');

               // res.send(html);
            }
            else{
                res.setHeader('content-type', 'text/html');
                let html = "<h2 style='color:red'>Not Matcing Data!</h2><br>";
                html+="<form action = '/home' method='GET'>";
                html+="<div><button>Back To Home!</button> </div></form>";
                res.send(html);
            }
        })
    })
})

