/*********************************
 * Loops and iteration
 *
 */

var john = ['John', 'Smith', 1990, 'teacher', 'developer']

for (var i=0; i < john.length;i++){
    if (typeof john[i] !== 'string'){
        continue; //continue if value not string
    } else {
     console.log(john[i])   
    }
}
