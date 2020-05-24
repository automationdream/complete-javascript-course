/*********************************
 * Loops and iteration
 *
 */

var john = ['John', 'Smith', 1990, 'teacher', 'developer']
var lenght_of_an_array = john.length -1
for (var i = lenght_of_an_array; i >= 0;i--){
    if (typeof john[i] !== 'string'){
        continue; // exits the entire iteration
    } else {
     console.log(john[i])   
    }
}
