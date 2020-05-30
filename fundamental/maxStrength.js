
let number = [] ;
let isCompelet =false;
function facto(n) 
{
    if(number.length == 0) number.push(n)
    const foundDup = number.includes(n);

    let sum =0;
    let fact;
    n=n + "";
    let arr = n.split('');
    //console.log(arr);
    for(j=0; j< arr.length; j++)
    {   fact =1;
    for(let i=1; i<= arr[j]; i++)
    {   
        
        fact = fact*i;
    }
    sum = sum +fact;

    }
    console.log('sum1', sum)
    const isPrsent = number.includes(sum);
    if(!isPrsent){
        isCompelet = true;
        number.push(sum);
    }else if(n > 10**6){
        return ;
    }else {
        return;
    }
        facto(sum);
}


facto(5)

// number = number.sort((a,b)=> b-a);
var a = Math.max(...number);
console.log(a);
var b = number.length;
console.log(a*b);
console.log('1', number);
// function maxstrength(num)
// {
//     fact(num);
// }

//  maxstrength(540);




