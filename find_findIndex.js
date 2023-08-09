const num = [5, 7, 8, 9, 10];

let firstEvenNumber = num.find((item) => item % 2 === 0);
let firstEvenNumberIndex = num.findIndex((item) => item % 2 === 0);
console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);

const objArr = [
  {
    id: 1,
    gpa: 3.1,
  },
  {
    id: 2,
    gpa: 3.2,
  },
  {
    id: 3,
    gpa: 3.3,
  },
  {
    id: 4,
    gpa: 3.4,
  },
  {
    id: 5,
    gpa: 3.5,
  },
];

console.log(objArr.find((item) => item.gpa >= 3.4));
