let input = {
    name: 'shail',
    birth: '05101998'
};

let output = '';
let {name, birth} = input;

name = name.split('');
birth = birth.split('');

if(name.length > birth.length){
    name.map(function(value, index){
        if(birth[index]) output += `${name[index]}${birth[index]}`;
        else output += `${name[index]}`;
    })
} else{
    birth.map(function(value, index){
        if(name[index]) output += `${name[index]}${birth[index]}`;
        else output += `${birth[index]}`;
    })
}

console.log(output)