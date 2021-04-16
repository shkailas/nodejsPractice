const http = require('http');
const req = require('request');

var server = http.createServer(function(request, response){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=422732c25cfc4ce05476058431baad55";
    req(url, function(err, res, body){
        //response.write(body);
        var data = JSON.parse(body);
        console.log(data.weather[0]['main']);
        response.write("<html><body><div id='container'>");
        response.write("<h2>City Name : " + data['name'] + "</h2>");
        response.write("<h2>Temperature : " + data.main['temp'] + "</h2>");
        response.write("<h2>Humdity : " + data.main['humidity'] + "</h2>");
        response.write("<h2>Weather : " + data.weather[0]['main'] + "</h2>")
        response.write("<h2>Sunset Time : " + new Date(data.sys['sunset'] * 1000) + "</h2><br>")
        console.log(data);
        response.end();
    });
});

server.listen(3000, "localhost", function(){
    console.log("server started at port 3000");
});