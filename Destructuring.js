let num = [10, 20, 30, 40, 50, 60];
let [num1, num2, num3, ...num4] = num;
let [x, y, z] = num4;
console.log(num1, num2, num3, num4);
console.log(x, y, z);

//  swap
let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a, b);

//   Destructuring object && fuction parameter

const studentInfo = ({ Name, language }) => {
  console.log(`${Name}, ${language.native}`);
};
const student = {
  Id: 1020,
  Name: "showrov",
  gpa: 3.28,
  language: {
    native: "bangla",
    beginner: "english",
  },
};

studentInfo(student);

// const { Name, language } = studentInfo;
// console.log(Name, language.native);
