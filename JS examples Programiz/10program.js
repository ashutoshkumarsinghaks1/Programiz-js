//Javascript Program to Check if a number is Positive, Negative, or Zero
// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}



// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}



// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}



// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}





// program to convert date to number
// create date
const d1 = new Date();
console.log(d1);

// converting to number
const result = d1.getTime();
console.log(result);




// program to write to console

// passing number 
console.log(8);

// passing string
console.log('hello');

// passing variable
const x = 'hello';
console.log(x);

// passing function
function sayName() {
    return 'Hello John';
}
console.log(sayName());

// passing string and a variable
const name = 'John';
console.log('Hello ' + name);

// passing object
let obj = {
    name: 'John',
    age: 28
}
console.log(obj);


// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object
