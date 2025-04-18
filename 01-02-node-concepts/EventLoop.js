 

// Code mechanism 

// TIMERS(EXECUTING CALLBACKS) -> pedning callbacks -> idle, prepare,  -> poll -> check -> close callabacks

// MICROTASKS -> process.nextTick(), promises
// MACROTASKS -> setTimeout, setInterval, setImmediate
// I/O -> network, file system, etc.



import fs from "fs";
import crypto from "crypto"
import { clear } from "console";

console.log("1. SCRIPT START") // SYNCHRONUS
setTimeout(() => {
    console.log("2. TIMEOUT 0s callback") // macrotask
}, 0)

setTimeout(() => {
    console.log("3. TIMEOUT 0s callback"); // macrotask
}, 0)


setImmediate(()=> {
    console.log('4. setImmediate callback (check phase)');
    
})

Promise.resolve().then(() => { // micro task
    console.log("5. Promise resolved (microtask)"); 
    
})

process.nextTick(()=> {
    console.log("6. process.nextCick callback (microtask)");

})

fs.readFile(__filename, () => {
    console.log("7. file read operation (I/O callback");
})
// sha512 - algo
crypto.pbkdf2("secret key", "salt", 10000, 64, 'sha512', (err, key) => {
    if(err) throw err;
    console.log("8. pbkdf2 operation completed (CPU intensive task)");
    
})



console.log("9. END") // // SYNCHRONUS


/*
 SCRIPT START
  END
  PROCESS.NEXTTICK
  PROMISE
  SETTIMEOUT 
  SETTIMEOUT
  SWTIMMEDIATE
  FILE READ
  pbkdf2
  */
 