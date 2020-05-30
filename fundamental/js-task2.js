let input = '11-o';
let inputArr = input.split('-');
let output = [];

if(inputArr[1] == 'e'){
    for(let i=1; i<=inputArr[0]; i++){
        if(i%2 == 0){
            output.push(i);
        }
    }
}else{
    for(let i=1; i<=inputArr[0]; i++){
        if(i%2 != 0){
            output.push(i);
        }
    }
}

console.log(output.join('|'))