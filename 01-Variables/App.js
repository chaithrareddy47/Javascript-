/* 
VARIABLES

Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/
let admin;

let name;

name1 = 'jhon';

admin = name1;

console.log(admin);

/*
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/

const our_planet = "EARTH"; // camelcase shoukd be used for consistency

let currentVisitor = "Chaithra"

console.log(our_planet + "  " + currentVisitor);



/*
 Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?
*/




const BIRTHDAY = '03 - 04 - 1998'; // why uppercase means birthdate with never change

const age = 26; // age changes evey year so we use lower case 
