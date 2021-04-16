const os = require("os");
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(totalMem);
console.log(freeMem);
console.log(os.platform());
console.log(os.hostname());