//Javascript Program to Convert Celsius to Fahrenheit
// program to convert celsius to fahrenheit
// ask the celsius value to the user
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = celsius * 1.8 + 32;

// display the result
console.log(
  `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
);



// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}


// program to add a key/value pair to an object

const person = {
    name: 'Monica',
    age: 22,
    gender: 'female'
}

// add a key/value pair
person.height = 5.4;

console.log(person);
