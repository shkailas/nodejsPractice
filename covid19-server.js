const http = require('http');
const req = require('request');

var server = http.createServer(function(request, response){
    var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        qs: {format: 'undefined', code: 'us'},
        //code refers to the country
        headers: {
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key': '37eb9acfacmsh188782bf934f766p16e353jsn30759586bc09'
        }
      };
    req(options, function(err, res, body){
        data = JSON.parse(body);
        console.log(data);
        //console.log(body);
        //response.write(body);
        response.write("<html><body><div id='container'>");
        response.write("<h2>Country : " + data[0].country+ "</h2>");
        response.write("<h2>Confirmed : " + data[0].confirmed + "</h2>");
        response.write("<h2>Recovered : " + data[0].recovered + "</h2>");
        response.write("<h2>Critical : " + data[0].critical + "</h2>")
        response.write("<h2>Deaths : " + data[0].deaths + "</h2>")
        response.write("<h2>Latitude : " + data[0].latitude + "</h2>")
        response.write("<h2>Longitude : " + data[0].longitude + "</h2><br>")
        
        response.end();
    });

});






  
server.listen(3000, "localhost", function(){
    console.log("server started at port 3000");
});