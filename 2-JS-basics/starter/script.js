// Variable mutation 
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// Variable mutation
age = 'twenty eight';
job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?')
console.log(firstName + ' ' + lastName)

/**
 * Basic operators
 */
var year, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
yearJohn = 2018 - 28;
yearMark  = 2018 -33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);