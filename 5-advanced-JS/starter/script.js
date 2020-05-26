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

function interviewQuestion(job) {

    return function (name) {
    if (job === 'designer') {
            console.log('Can you please explain what UX design is, ' + name + '?');
        }
    else if (job === 'teacher') {
            console.log('Could you please tell us what subject do you teach, ' + name + '?');
        }
    else {
            console.log('What do you do, ' + name + '?');
        }
    }
}

var designerQuestion = interviewQuestion('designer');

designerQuestion('John');

(function () {
   var score = Math.random() * 10; 
   console.log(score >= 5);
})();

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
    
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

interviewQuestion('designer')('John');
interviewQuestion('teacher')('Steve');
interviewQuestion()('Wiki')

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +
            this.name + ', I am a ' +
            this.job + ' and I am ' +
            this.age + ' years old' 
            );
        }
        else if (style === 'friendly'){
            console.log('Hey whats up? ' + 
            this.name + ', I am a ' +
            this.job + ' and I am ' +
            this.age + ' years old.'
            );
        }
    }
    }

    john.presentation('formal','morning')

    var emily = {
        name: 'Emily',
        age: 35,
        job: 'designer'
    }

    var johnFriendly = john.presentation.bind(john, 'formal');

    johnFriendly('morning');
    johnFriendly('night');
