const Bank = require("./bank.js");
const bank = new Bank('Shankar', "123", 200);
bank.on('balance1', (e)=>{
    console.log(e.change + " was withdrawn");
    console.log(e.balance)
})
bank.on('balance2', (e)=>{
    console.log(e.change + " was deposited");
    console.log(e.balance)
})

bank.withdraw(5);

bank.deposit(100);