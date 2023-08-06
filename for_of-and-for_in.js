const names = ["Showrov", "Siam", "Sagor"];

for (let name of names) {
  console.log(name);
}

const students = {
  Id: 22108019,
  name: "Showrov",
  cgpa: 3.28,
};

for (let item in students) {
  console.log(`${item}: ${students[item]}`);
}
