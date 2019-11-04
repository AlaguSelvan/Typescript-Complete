// type inference
const apples = 4
// type annotation
const myName: string = 'Dave'
const mySkills: string[] = ['Gaming', 'Programming']

const colors: string[] = ['red', 'black', 'orange'];
const myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// For Class
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumbers: (i: number) => void = (i: number) => {
  console.log(i)
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2) when we declare variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let word of words) {
  if(word === 'green') {
    foundWord = true;
  }
};

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
};

