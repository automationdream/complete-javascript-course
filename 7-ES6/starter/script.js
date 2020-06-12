// Lecture: let and const

let i = 23;

for (let i=0; i<5; i++) {
    console.log(i)
}

console.log(i); // <- this i is completely different than inside of the code block

{
    const a = 1;
    let b = 2;
}

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
   return 2016 - year; 
}

console.log(`This is ${firstName} ${lastName}. He is ${calcAge(yearOfBirth)}.`) // <- templates literal

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('J'));
console.log(n.includes('J'));

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (year) {
    return 2020 - year;
    })

console.log(ages5)

// ES6
let ages6 = years.map(el => 2020 - el)

console.log(ages6);

ages6 = years.map((el, index) => `Element ${index + 1}: Age ${2020 - el}`)

console.log(ages6);

const box6 = {
    color: 'green',
    position: '1',
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box numer ' + this.position + ' and it is ' + this.color;
            alert(str);
            })
    }
}

box6.clickMe()


Person = function (name) {
    this.name = name;
}

Person.prototype.myFriends = (friends) => {
    var arr = friends.map(el  => {
        return this.name + ' is friends with '  + el
        })
        console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark']

new Person('John').myFriends(friends);

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
})

const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(cur => {
    cur.style.backgroundColor = 'green';
})

// ES6 for loop


for (const cur of boxesArr6) {
    if (cur.className === 'box blue') {
        continue;
    }
    cur.textContent = 'I changed to green';
}

var ages = [12,2,17,21,9,11];

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,10,12,22)
console.log(sum1);

var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

console.log(addFourAges(...ages))

const h = document.querySelector('h1');

const boxes2 = document.querySelectorAll('.box');

const all = [h, ...boxes2];

Array.from(all).forEach(cur => {
    cur.style.color = 'purple';
})