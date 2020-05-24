// Ternary operator

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') 
: console.log(firstName + " drinks juice.");


var drink = age >= 18 ? console.log('beer'): console.log('juice');
console.log(drink);

// Switch statement
job = 'teacher'
switch (job) {
    case 'teacher':
        console.log('teatcher')
        // If there would not be a break then it will test next statements 
        break;

    case 'driver':
        console.log('teatcher')
        
        break;
    default:
        break;
}