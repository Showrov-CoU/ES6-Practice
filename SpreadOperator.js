const add = (x, y, z, ...rest) => {
  console.log(`${x + y + z}`);
  console.log(rest);
};
const numbers = [5, 10, 15, 20, 25, 30, 35];
add(...numbers);

const number2 = [5, ...numbers, 40, 45, 50];
console.log(number2);

const number3 = [...numbers, ...number2];
// const number3 = numbers.concat(number2);
console.log(number3);

const Person1 = {
  name: "Ashikur Rahman Showrov",
  age: 25,
};
const person2 = {
  nationality: "Bangladeshi",
  religion: "Islam",
};

const person = { ...Person1, ...person2 };
console.log(person);
