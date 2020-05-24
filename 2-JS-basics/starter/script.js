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

console.log(john.calcAge());