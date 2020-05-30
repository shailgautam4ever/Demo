let str = "eeeeefffagggaabbbcccddd";
let count;
let setarr;

let arr = str.split('');
// console.log(arr);


let myset =new Set();

// myset.add(arr);

// console.log(myset);

for(let i=0; i< arr.length ; i++)
{
    myset.add(arr[i]);
}

let iterator = myset.values();

// console.log(iterator);

setarr =[...myset];
setarr.sort();

// console.log(setarr);

for(let i= 0 ; i < setarr.length ; i++)
{
    count=0;
    
for(let key in arr)
{
    
  if(setarr[i]== arr[key])
  {
    
      count = count+1
      
  }
  else{
    //   console.log(setarr[i])
  }
  

}

console.log(`${setarr[i] }- ${count}`);

}

// console.log(myset.size)
// for(let i=0 ; i < setarr.length; i++){
// for(let key in arr)
// {
//     console.log(setarr[i] , arr[key])
// }
// }



// for(let i=0; i<myset.size ; i++)
// {
//     console.log(iterator.next().value);
// }




