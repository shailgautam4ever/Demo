// GET Call
fetch('https://randomuser.me/api/?nat=au')
.then(value=>value.json())
.then(jsonResponse=>{
    console.log(jsonResponse.results);
}).catch(err=>{
  console.log(err);
})