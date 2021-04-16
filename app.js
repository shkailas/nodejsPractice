
const adder = require("./adder.js");
const path = require('path');


var pathObj = path.parse(__filename);
console.log(pathObj);
console.log("hello");
function sayHello(name){
    console.log("hello " + name);
}
sayHello("Shankar");
console.log(module);

const Logger = require("./logger.js");
const logger = new Logger();
logger.on('messageLogged2', function(e){
    console.log('recieved11');
    console.log(e.id)
    console.groupCollapsed(e.url)
})
logger.log("my Message");
var a = adder.add(2,3);
console.log(a);