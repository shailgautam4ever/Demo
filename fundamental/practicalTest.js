let subject = {name: "Shailgautamsiya",  birth: '0510199852164' }
// console.log(Object.keys(subject));
let arr =[];

arr =Object.values(subject);
let a;

if(subject.name< subject.birth)
{
    a=subject.birth.length;
    //console.log(a);
}
else {
    a=subject.name.length;
    //console.log(a);
}
//  console.log(arr[1][1]);

// let i=0

//s0h5
let j=0;

// for(let i=0 ; arr[i][j] != null ;i++)
// {
//     for( j=0 ; arr[i][j]!= null ; j++)
//     {
//     console.log(arr[i][j]);
//     }
    
// }

// for(let i=0 ; arr[i][i]!= null; i++)
// {
// for(let key in subject){
//     console.log(subject[key][i]);
    
// }
// }
 let currentValue = [];


// for(let i=0 ; i< a ;i++)
// {
//     for(j=0; arr[i][j]!= null ; j++)
//     {
//         for(let key in subject){
//             // if(subject[key][j]!= null)
//             // {
//             // console.log(subject[key][j].split('\n').join('-'));
//             currentValue = currentValue.concat(subject[key][j]);
//             //   vals = Object.values(currentValue)

//             // }
//         }
//     }
    
    
// }

for(j=0; j<a ; j++)
    {
        for(let key in subject){
            // if(subject[key][j]!= null)
            // {
            // console.log(subject[key][j].split('\n').join('-'));
            currentValue = currentValue.concat(subject[key][j]);
            // currentValue = [...subject[key]];
            //   vals = Object.values(currentValue)

            // }
        }
    }

// let str = currentValue.join(':');
console.log(currentValue.join(''));

// for(j=0; arr[i][j]!= null ; j++)
// {
//         for(let key in subject){
//             if(subject[key][j]!= null)
//             {
//             console.log(subject[key][j]);
//             }
//         }
//     }    







// console.log(arr[0].length);






