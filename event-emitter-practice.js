const EventEmitter = require('events');
const emitter  =  new EventEmitter();

emitter.on('messageLogged', (arg)=>{
    console.log("listener called");
    console.log(arg);
    console.log(arg.id);
    console.log(arg.url);
});
emitter.emit('messageLogged',{id:1 , url:'http://abc.com'});


emitter.on('hello', function(e){
    console.log('hi');
    console.log(e.a);
    console.log(e.b);
    console.log(e.c);
});
emitter.emit('hello',{a:1, b:2, c:3});

const Logger  = require("./logger");
const l = new Logger();
l.log("message");
l.on('messageLogged2', function(e){
    console.log('recieved');
})
