let games = ['pubg', 'nfs', 'football', 'gta', 'csgo', 'jelly blast'];

// for(let i = 0; i< games.length; i++){
//     console.log(games[i])
// }

// for each
// 
// games.forEach(function(value, index){
    //body of loop
    // console.log(value, index);
// })

// let newGames = games.reverse();

// console.log(newGames);
// console.log(games.join(':'));
 let str = 'Shail THe queen';

 //console.log(str.split('e').join('-').toLowerCase())
 console.log(str.split('e'));
 str.join()
 


// let result = games.map(function(value, index, arr){
    // if(value == 'pubg') return value;
// });
// let result = games.filter(function(value){
    // if(value == 'pubg') return value;
// })

// console.log(result);




// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenArr = numbers.filter(function(value, index, arr){
    
//     return value;
// });


// console.log(evenArr);




games = [
    { name: 'pubg', device: ['pc', 'mobile'] },
    {name: 'nfs', device: ['pc']},
    {name: 'gta', device: ['pc']},
    {name: '', device: ['pc']},
    {name: 'jelly blast', device: ['pc']}    
];

let newResult = games.filter(function(value, index, arr){
    if(value.name) return value;
});

newResult = games.map(function(value, index, arr){
    if(value.name) return value;
});

console.log(newResult)
