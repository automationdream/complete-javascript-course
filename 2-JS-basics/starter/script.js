/*********************************
 * Loops and iteration
 *
 */

var john = ['John', 'Smith', 1990, 'teacher', 'developer']

for (var i=0; i < john.length;i++){
    if (typeof john[i] !== 'string'){
        break; // exits the entire iteration
    } else {
     console.log(john[i])   
    }
}
