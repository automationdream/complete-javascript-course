/*************************
 * Objects and properties
 */


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'John'],
    job: 'teacher',
    isMarried: true,

}

console.log(john.firstName); //accessing
console.log(john['firstName']); //accessing

var x = 'birthYear';
console.log(john[x]);

var jane = new Object();

//New Object syntax
jane.firstName = 'Jane';
jane.lastName = 'Smith';