/****************
 * Truthy and Falsy equality operators
 */

//falsy values: undefinied, null, 0, '', NaN
//truthy values: not falsy values

var height;
height = 23

if (height) {
   console.log('Variable is definied') 
} else {
   console.log('Variable is not definied') 
}

// Equality operators
if (height == '23') {
    // Uses type coercion
    console.log('The operator == does type coercion');
}

if (height == '23') {
    // Its an equality operation , does not match type coercion
    console.log('The operator === matches the types does not use type coercion');
}