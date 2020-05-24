/**************
 * Functions
 *    
 */

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName) {
   var age = calculateAge(birthYear); 
   var retirement = 65 - age;

   if (retirement<=0){
       console.log(firstName + ' is already in retirement ');
   } else {
       console.log(firstName + ' retires in ' + retirement + ' years.');
   }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'John');