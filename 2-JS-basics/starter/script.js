/********
 * Arrays
 */
// Initialize Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names[0]); //John
console.log(names.length); //3

// Mutate array data
names[1] = 'Ben'; //ammend value in array
console.log(names);

names[5] = 'Mary'; // John, Mark, Jane, empty, empty, Mary
console.log(names);

names[names.length] = "New name";
console.log(names) 

//  Arrays Different data types
var john = ['John','Smith', 1990, 'teacher', 'developer']

john.push('blue');
console.log(john);

john.unshift('Mr.') //Adds element on the beginning
console.log(john);

john.pop(); //rmoves last element
console.log(john);

john.shift(); //removes first element
console.log(john);

var check =john.indexOf(1990); //test if element exists in array => 2
console.log(check);

var isDesigner = john.indexOf('developer') === -1 ? console.log('john is not a developer') : console.log('john is a developer')