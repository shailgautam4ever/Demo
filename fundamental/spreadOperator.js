let user1 = {
    name: 'shail',
    age: 16
};

let user2 = {
    mobileNumber: '8171801660',
    address: {
        city: 'city'
    },
    age: 100
}
let mergedObj = {...user1, ...user2};
// console.log(mergedObj);

function myFun(a, ...rest){
    console.log(a, rest);
}

// myFun(10, 'a', 'b');



let { password, ...rest } = user2; // let mobileNumber = user2.mobileNumber
let [a, ...b] = [1, 2,3,5];

//mobileNumber === > user2.mobileNumber


console.log(...b);