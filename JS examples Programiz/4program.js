//Q4.JavaScript Program to Calculate the Area of a Triangle
//Example 1: Area When Base and Height is Known

const baseValue = prompt("Enter the base of a triangle: ");
const heightValue = prompt("Enter the height of a triangle: ");

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${areaValue}`);

//Example 2: Area When All Sides are Known

// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt("Enter side1: "));
const side2 = parseInt(prompt("Enter side2: "));
const side3 = parseInt(prompt("Enter side3: "));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue1 = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(`The area of the triangle is ${areaValue1}`);


// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}
