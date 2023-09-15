//JavaScript Program to Swap Two Variables
//Example 1: Using a Temporary Variable
//JavaScript program to swap two variables

//take input from the users
let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable: ");

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);



// program to encode a string to Base64
// defining the string
const str = "Learning JavaScript"; 

// encoding the string
const result = window.btoa(str);
console.log(result);

// decoding the string
const result1 = window.atob(result);
console.log(result1);
