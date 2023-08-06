const numbers = [10, 20, 30, 40];

numbers.forEach((item, index, numbers) => {
  numbers[index] = item + 5;
});

console.log(numbers);
