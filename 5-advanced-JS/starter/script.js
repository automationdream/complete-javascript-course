var Person = function (name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
    this.calculateAge = function (currentYear) {
        console.log(currentYear - this.yearOfBirth)
    }
}

var john = new Person('John', 1990, 'teacher');

john.calculateAge(2020);