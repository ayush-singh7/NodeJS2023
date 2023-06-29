// dynamically typed

let a = 10;
console.log(typeof(a));  // gives number
a = "ayush"
console.log(typeof(a));   // gives string


// single threaded asynchonous non blocking

console.log('beginning')

setTimeout(()=>{
    console.log("async operation 1")
},8000)

setTimeout(()=>{
    console.log("async operation 2")
},4000)

console.log("end")