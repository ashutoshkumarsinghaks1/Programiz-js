//JavaScript Program to Convert Kilometers to Miles
//Example 1: Kilometers to Miles
// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ");

// conversion factor
const factor = 0.621371;

// calculate miles
const miles = kilometers * factor;

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);



// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);



// program to find the LCM of two integers

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
