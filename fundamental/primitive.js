// primitive
let a = 10;
let b= a;

console.log(a, b);

 b++;


console.log(a,b);


//non primitive
let obj = {
	a: 10,
	b: 12,
	c : {
		d: 10
	}
};

// let obj2 = obj;

// obj2.newKey = 100;

// obj2.a++;

// console.log(obj.a, obj2.a);

let obj2 = Object.assign({}, obj);

obj2.c.d++;

console.log(obj);
