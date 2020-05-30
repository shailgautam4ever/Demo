let user = {
	name: 'new user',
	pass: 'new pass',
	length: 10,
	obj: {
		c: {
			o: 1
		}
	}
};
// 
console.log(user.length);

let str = JSON.stringify(user);
let cloneObj = JSON.parse(str);

user.obj.c.o = 2;

console.log(cloneObj);