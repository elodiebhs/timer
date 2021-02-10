//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments


// process.stdout.write('\x07');  make our machine perform a system sound,
// console.log(process.argv);

const args = process.argv.slice(2); //this is skyping the 2 first arguments that we don't need
console.log(args) //  []



for (const element of args){
  setTimeout(function() {
    process.stdout.write('\x07')
    }, element * 1000)
    
}




//node timer1.js 10 3

// 3 bips before 10. There are in the same queue