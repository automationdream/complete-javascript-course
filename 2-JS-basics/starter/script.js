/*********************************
 * Objects and methods 
 * 
 */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'John'],
    job: 'teacher',
    isMarried: true,
    calcAge: function (birthYear) {
        return 2018 - this.birthYear; //using this
    }
 
};

john.age = john.calcAge(); // using builtin function and adding the new index into the object
console.log(john)