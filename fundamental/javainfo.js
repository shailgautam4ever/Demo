let input = ['10-e',];
let a;
// [10, e]
let b;
let arr = [];
let str = [];

for(let i=0, j=0; input[i][j]!= null; j++)
{
    if(input[i][j]== 'o')
    {
      //console.log(input[0].split('-o'));
      a = input[0].split('-o');
      b = +a[0];

      console.log('odd');

      for(let i=1; i<= b ; i++)
      {
        if( i%2 != 0)
        {
           arr = i;
           str = str.concat(arr);
          
        }
      }
      console.log(str.join('|'));
      
    }

    if(input[i][j]=='e')
    {
      a = input[0].split('-e');
      b = +a[0];
      console.log('even');

      for(let i=1; i<= b ; i++)
      {
      if( i%2 == 0)
      {
         arr = i;
         str = str.concat(arr);
         
      }
    }
      console.log(str.join('|'))
    }
}

 //console.log(a);
//  let b = +a[0];
//  let arr;
 //console.log(typeof(b));

//  for(let i=1; i<= b ; i++)
//  {
//    if( i%2 == 0)
//    {
//       arr = i;
//      console.log('happy' + arr);
//    }
//    else if( i%2!= 0)
//    {
//       arr = i;
//       console.log(arr);
      
//    }
//  }


