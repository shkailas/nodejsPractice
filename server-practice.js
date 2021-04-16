const http = require('http');
const EventEmitter = require('events');
const url = require('url');
const fs = require("fs");
const emitter  =  new EventEmitter();


const server = http.createServer(function(req, res){
    const queryObj =url.parse(req.url, true).query;
    
    
    //emitter.emit("msg", queryObj);
    console.log(queryObj.fileName);
    x = fName(queryObj.fileName);
    res.end(x);
});

emitter.on("msg", function(arg){
    console.log("msg recieved");
    console.log(arg.fileName);
    
});
function fName(fileName){
    console.log(fileName);
    fs.readFile(fileName, function(err,data){
        if(!err){
            return data;
        }
        else{
            return null;
        }
    });
}

server.listen(3002, "localhost", function(){

    console.log("server started at port 3002");
});

