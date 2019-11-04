const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// help with inference
const carsByMake: string[][] = [
  ['f1f0'],
  ['corolla'],
  ['camaro'],
];

const car1 = carMakers[0];
const myCar = carMakers.pop();

// Flexible types
const importantDates: (Date | string)[] = [new Date(0)];
importantDates.push('2030-10-10');
importantDates.push(new Date());