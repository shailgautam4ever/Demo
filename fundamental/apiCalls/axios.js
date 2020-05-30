const axios = require('axios');

const url = 'https://randomuser.me/api/?nat=au';
let data = null;
axios.get(url)
.then(data=>{
    console.log('data found')
    data = '123';
    console.log('data', data);
}).catch(err=>{
    console.log('error occured')
})

console.log('hii', data);
