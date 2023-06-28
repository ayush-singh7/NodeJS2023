// map vs forEach

// let countries = ['India','Argentina','Spain','France','Italy', 'Japan','England']

// let MAP_countries = countries.map((item)=>item);

// let FE_countries = countries.forEach((item)=>item);

// console.log(MAP_countries,'----MAP returns an array fE returns undefined-----',FE_countries);

// let MAP_chain = countries.map((item)=> item).sort()  // sorting

// console.log(MAP_chain,'----MAP is chainable')



// example of reduce

// let playersData = [
//     {name:'max', age:22},
//     {name:'ace', age:25},
//     {name:'ram', age:45},
//     {name:'jack', age:22},
//     {name:'jill', age:25}
// ]

// let groupedData = playersData.reduce((group,player) =>{
    
//     const age = player.age;

//     if(!group[age]){
//         group[age] = []
//     }
//     group[age].push(player.name)
//     return group
    
// }, {})

// console.log(groupedData,'final');


// fetching total of data of type B with score * 5 

// let data = [
//     {
//         score:22,
//         type:'A'
//     },
//     {
//         score:35,
//         type:'B'
//     },
//     {
//         score:32,
//         type:'A'
//     },
//     {
//         score:12,
//         type:'B'
//     },
//     {
//         score:27,
//         type:'A'
//     },
//     {
//         score:17,
//         type:'B'
//     }
// ]


// let answer = data.filter((item)=>item.type == 'B').map((item)=> item.score * 5).reduce((total,item)=> total+ item);

// console.log(answer,"FINAL");
