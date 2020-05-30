let student = {
	name: `shail`,
	age: 10,
	isPassed: true,
	school: {
		name: `Oxford`,
		class: `10`,
		sec: `A`
	}
}

let allKeys = Object.keys(student);

console.log(allKeys);
console.log(student.school.name, student['school']['sec'])

console.log(student.school['sec']);
console.log(student['school'].sec)


// for(let i = 0; i<allKeys.length; i++){
// 	console.log(`${allKeys[i]} ${student[allKeys[i]]}`);
// }

// let allValues = Object.values(student);

// console.log(allValues);