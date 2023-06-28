// var is globally or functionally scoped let,const are globally scoped
// const dont allow value updation let allows
// use let and const avoid var



if(1){
    var x = 'ayush';
}

console.log(x);


if(1){
    let y = 'aaaaaayush';
}

// console.log(y); y gives not defined error



let name = "ayush";
name = "jack"

console.log(name);


const name2 = "max";
// name2 = "leo" (gives error)

console.log(name2);