let obj = {

};

// try{
//     console.log(obj.name.first);
// }catch(ex){
//     console.log(`Something went Wrong, Error: `, ex.message);
// }finally{
//     console.log(`now inside finally`)
// }
console.log('first')
setTimeout(function(){
    console.log('now inside timeout',obj.name.first)
}, 0);
console.log('second')