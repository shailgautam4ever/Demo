function facto(n)
{
    
    let sum =0;
    let fact;
    console.log(10**6);
    for(let i=1; i<= 10**6; i =fact)
    {
        n=n + "";
        let arr = n.split('');
        
        for(j=0; j< arr.length; j++)
        {   fact =1;
        for(let i=1; i<= arr[j]; i++)
        {   
            
            fact = fact*i;
        }
        sum = sum +fact;

        n=sum;
        console.log(n)
        
        }





    }
}

facto(5)