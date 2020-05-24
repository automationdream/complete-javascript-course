/*************************************
 * Function Statements and Expressions
 */

 // Function declaration
// function whatDoYouDo(params) {}

 // Function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' theaches kids how to code';
        case 'developer':
            return firstName + ' creates beautifull applications';
        default:
            return firstName + ' does something else';
    }

}
console.log(whatDoYouDo('teacher', 'Bart'))
console.log(whatDoYouDo('developer', 'Bart'))