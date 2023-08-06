const arr = [
  {
    id: 8,
    name: "Showrov",
    cgpa: 3.28,
  },
  {
    id: 9,
    name: "Asif",
    cgpa: 3.17,
  },
  {
    id: 10,
    name: "Ashikur",
    cgpa: 3.21,
  },
  {
    id: 10,
    name: "Rahman",
    cgpa: 3.5,
  },
];

// console.log(arr);
const maxCgpaStudentName = (arr) =>
  arr.filter((student) => student.cgpa >= 3.2).map((student) => student.name);

console.log(maxCgpaStudentName(arr));
