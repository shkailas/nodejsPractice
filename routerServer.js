const express = require('express');
const app = express();
const router = express.Router();

router.use (function(req, res, next){
    console.log("time: "+ Date(Date.now()).toString());
    next()
})

router.use("/user/:id", function(req, res, next){
    console.log('Request Url:'+ req.originalUrl);
    next()
    },
function(req, res, next){
    console.log('Request Type: '+req.method);
    next()
    }
)

router.get('/user/:id', function(req, res, next){
    if(req.params.id==='0'){
        console.log('id is 0');
        next('route')
    }
    else{
        next()
    }
    }, function(req,res,next){
        console.log("regular");
    }
)

app.use('/', router);
app.get("/user/:id",function(req, res){
    res.send("test ");
})
//server is listening
app.listen(3000, function(){
    console.log('router-server running');

});