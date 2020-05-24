///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);

function calculateAge(year) {
    console.log(2016-year);
}

// retirement(1956); // error

calculateAge(1990);

var retirement = function (year) {
    console.log(65-(2016 - year));
}


console.log(age) // Undefined <- variables which does not have values yet would be undefined
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}

foo();

console.log(age); // After declaration they would be printed






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}



// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}



///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1985);

function calculateAge(year){
    console.log(2018-year)
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
       console.log(2018- this.yearOfBirth);
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge

mike.calculateAge();