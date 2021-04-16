const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messageLogged2', {id:1, url:'http://aboutnode.com'});
    }
}
module.exports = Logger;
