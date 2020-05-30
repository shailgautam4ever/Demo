const axios = require('axios');

const url = 'https://randomuser.me/api/?nat=au';
let result = null;

async function getData(){
    result = await axios.get(url)
    return result.status;
}

getData().then(statusCode => console.log(statusCode));

console.log('result', result);

getData(function(err, data){
    console.log('hii', err, data)
});


const  obj = {
    name: 'abc',
    age: 10,
    mobilenUmber: '123'
}

const {name, ...rest} = obj;

console.log('rest', ...Object.keys(rest));