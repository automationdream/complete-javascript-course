const currentYear = 2020;

var Person = function (name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
}

Person.prototype.calculateAge = function (currentYear) {
        console.log(currentYear - this.yearOfBirth)
    }

Person.prototype.lastName = 'Smith' 

var john = new Person('John', 1990, 'teacher');
var jane = new Person('John', 1969, 'disigner');
var mark = new Person('Mark', 1989, 'retired');

john.calculateAge(currentYear);
jane.calculateAge(currentYear);
mark.calculateAge(currentYear);

console.log(john.lastName)

function arrayCalc(arr, fn) {
    var arrRes = []
    for (var k=0; k < arr.length; k++) {
       arrRes.push(fn(arr[k])); 
    }
    return arrRes
}

function maxHeartRate(el) {
    if (el>18 && el < 81) {
        return Math.round(206.9 - (0.67 * el))
    }
}

ages = [18,25, 40]

console.log(arrayCalc(ages,maxHeartRate))