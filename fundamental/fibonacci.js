var fibo = function(n)
{
    if(n===1)
    {
        return[0,1];
    
    }
else{
        var s=fibo(n-1);

        s.push(s[s.length - 1] + s[s.length -2]);
        console.log(s[s.length-1])

        return s;
    }
}

console.log(fibo(8));