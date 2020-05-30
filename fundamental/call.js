function sayYes(){
    console.log('yes');
}

function sayNo(){
    console.log('no');
}

function ask(message, yes, no){
    if(message.length > 10) yes();
    else no();
}

ask('this', sayYes, sayNo);

// ask('this is another sentence', 
// function(){
//    console.log(`yes`)
// }, function(){
//    console.log('no')
// });


// setTimeout(sayYes, 1000);
// let evenArr =[];


//-------------arrow func----------------

// function f(){
    //     console.log('hi')
    // }
    
    // () => console.log('hi')
    
    // function f(a){
        //     console.log(a)
        // }
        
        // a => console.log(a)

        // function f(a, b){
//     console.log(a+b);
// }

// (a,b) => console.log(a+b)


// function f(a,b){
    //     return a+b;
// }

// (a,b) => a+b;


// result = [1,2,3,4,56,7].map(())

//-------------normal----------------
let result = [1, 3,4,6].map(function(value, index, arr){
    if(value%2==0) return value;
});

let result = [1, 3, 4, 5, 6].map()





console.log(result.length)