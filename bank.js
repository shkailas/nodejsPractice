const EventEmitter = require('events');

class BankClass extends EventEmitter{

    constructor(n, a, b){
        super();
        this.name = n;
        this.account = a;
        this.balance = b;
    }
    
    withdraw(x) {
        this.balance = this.balance - x;
        this.emit("balance1", {balance: this.balance, change: x});
    }

    deposit(x){
        this.balance = this.balance + x;
        this.emit("balance2", {balance: this.balance, change :x});
    }
    

}

module.exports = BankClass;