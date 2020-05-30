//access the values from objects 1 => ., 2=> [key]
let student = {
	name: `shail`,
	age: 0,
	isPassed: true
}

// console.log(`student ${student.name} ${student.age}`);

let flower = ['rose', 'sunflower', 1];

let key = 'name';
// console.log(flower[2], student[key]);

let age = 12
student.age = age;

student.rollNo = 100;

student['address'] = 'abc';

let name = 'new student';

console.log(`student`, student);

console.log('rollno' in student);