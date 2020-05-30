let str = "banana";
let count;
let setarr;

let arr = str.split('');

let myset =new Set(arr);

for(let i=0; i< arr.length ; i++)
    myset.add(arr[i]);

setarr = [...myset].sort();  // Array.from(new Set(arr)).sort()
let obj = {};

// setarr.map(function(value, index){
//     let count = 0;
    
// })

for(let i= 0 ; i < setarr.length ; i++)
{
    count=0;
    
    for(let key in arr)
    {
            if(setarr[i]== arr[key])
            count = count+1;
    }

// console.log(`${setarr[i] }- ${count}`);
    obj[setarr[i]] = count;
}

console.log(obj);

