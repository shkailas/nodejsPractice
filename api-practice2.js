const http = require('http');
const req = require('request');

var server = http.createServer(function(request, response){
    var url = "https://reqres.in/api/users?page=2";
    req(url, function(err, res, body){
        //response.write(body);
        var data = JSON.parse(body);
        console.log(data);
        console.log(data['data'][0].id);
        response.write("<html><head><style>table, th, td {border: 1px solid black;}</style></head>");
        response.write("<body><div id='container'>");
        response.write("<table style=\"width:100%; border: 1px solid black;\"> <tr> <th>id</th><th>email</th><th>First Name</th><th>Last Name</th><th>Avatar</th></tr>");
        //
        response.write("<tr><td>"+ data['data'][0].id+ "</td><td>"+ data['data'][0].email+"</td><td>"+ data['data'][0].first_name+"</td><td>"+ data['data'][0].last_name+"</td><td><img src = \"" +data['data'][0].avatar+"\"></tr></tr>");
        response.write("<tr><td>"+ data['data'][1].id+ "</td><td>"+ data['data'][1].email+"</td><td>"+ data['data'][1].first_name+"</td><td>"+ data['data'][1].last_name+"</td><td><img src = \"" +data['data'][1].avatar+"\"></tr></tr>");
        response.write("<tr><td>"+ data['data'][2].id+ "</td><td>"+ data['data'][2].email+"</td><td>"+ data['data'][2].first_name+"</td><td>"+ data['data'][2].last_name+"</td><td><img src = \"" +data['data'][2].avatar+"\"></tr></tr>");
        response.write("<tr><td>"+ data['data'][3].id+ "</td><td>"+ data['data'][3].email+"</td><td>"+ data['data'][3].first_name+"</td><td>"+ data['data'][3].last_name+"</td><td><img src = \"" +data['data'][3].avatar+"\"></tr></tr>");
        response.write("<tr><td>"+ data['data'][4].id+ "</td><td>"+ data['data'][4].email+"</td><td>"+ data['data'][4].first_name+"</td><td>"+ data['data'][4].last_name+"</td><td><img src = \"" +data['data'][4].avatar+"\"></tr></tr>");
        response.write("<tr><td>"+ data['data'][5].id+ "</td><td>"+ data['data'][5].email+"</td><td>"+ data['data'][5].first_name+"</td><td>"+ data['data'][5].last_name+"</td><td><img src = \"" +data['data'][5].avatar+"\"></tr></tr>");

        response.write("</table>");
        response.end();
    });
});

server.listen(3000, "localhost", function(){
    console.log("server started at port 3000");
});