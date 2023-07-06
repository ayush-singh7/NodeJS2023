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


// 1. Create a simple asynchronous function:

// async function simple(){
//     let answer = 10;
//     console.log(answer);
// }

// 2. Start by creating a basic asynchronous function using setTimeout or a similar mechanism.
// Experiment with different delays and observe how the code behaves asynchronously.

// let p = new Promise ((resolve, reject) =>{
    
//     setTimeout(() => {
//         if(1){
//             resolve('RESOLVED')
//         }else{
//             reject('REJECT')
//         }
//     }, 1000);
// })


// async function timeout(){
//     let ans = await p;
//     console.log(ans,"ANSWER");
// }

// timeout()

// Practice working with callbacks by creating functions that accept callbacks as parameters and simulate asynchronous operations. 
// Write code to handle the results or errors returned by the callbacks.


// setTimeout(() => {
//     let num_1 = 10;
//     console.log(num_1,"FIRST");
//     setTimeout((num_2) => {
//         console.log(num_2,"SECOND");
//         setTimeout((num_3)=>{
//             console.log(num_3,"THIRD");
//         },1000,num_2)
//     }, 1000,num_1);

// }, 1000);

// Handle multiple asynchronous operations:
// Challenge yourself by writing code that handles multiple asynchronous operations. Use callbacks or promises to execute the operations in parallel or sequence. 
// Pay attention to the order of execution and ensure proper error handling.

// console.log("FIRST");

// let p = new Promise((resolve,reject)=>{
//     console.log("SECOND");

//     if(0){
//         resolve('1')
//     }else{
//         reject('2')
//     }
// })

// p.then((res)=> console.log(res)).catch((err)=> console.log(err));

// function HO(cb){
//     console.log("THIRD");
//     cb();
// }

// function cb(){
//     console.log("FOURTH");
// }

// HO(cb);

// console.log('END');

// Practice using async/await syntax to write more readable and synchronous-loacoking code for asynchronous operations

// let promiseWrapper1 =() => new Promise((resolve,reject)=>{
//    setTimeout(() => {
//     if(1){
//         resolve('RESPONSE_1')
//     }else{
//         reject('2')
//     }
//    }, 1000);
// })

// let promiseWrapper2 =() => new Promise((resolve,reject)=>{
//     setTimeout(() => {
//      if(1){
//         resolve('RESPONSE_2')
//      }else{
//          reject('2')
//      }
//     }, 1000);
//  })

// function myFunction(){  // using .then() to resolve async operation 
    
//     promiseWrapper1().then((res1)=>{
//         console.log(res1);
        
//     promiseWrapper2().then((res2)=>{
//         console.log(res2);
//     })  
//     })  

// }
// myAsyncFunction1()

// async function myAsyncFunction1(){
//     let res1 = await promiseWrapper1();
//     console.log(res1);
//     let res2 = await promiseWrapper2()
//     console.log(res2,"sss");

// }