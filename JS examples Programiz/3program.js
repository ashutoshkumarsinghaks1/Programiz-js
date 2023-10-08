//Q3. JavaScript Program to Find the Square Root

//Example 1: Square Root of a Number
// take the input from the user
const number = prompt("Enter the number: ");

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

//Example 2: Square Root of Different Data Types
const number1 = 2.25;
const number2 = -4;
const number3 = "hello";

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);



// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);
