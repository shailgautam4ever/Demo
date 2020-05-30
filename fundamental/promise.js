let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Hi this is your data: 1000');
    }, 1000);
    // reject('Something went wrong')
});


promise.then(function(value){
    console.log(value);
}).catch(error=>{
    console.log(error);
})