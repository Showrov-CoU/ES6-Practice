console.log("welcome");

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task1 completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    // resolve("task2 completed");
    setTimeout(() => {
      resolve("task2 completed");
    }, 1000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task3 Not completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task4 completed");
  });
};

taskOne()
  .then((res) => {
    console.log(res);
  })
  .then(taskTwo)
  .then((res) => {
    console.log(res);
  })
  .then(taskThree)
  .then((res) => {
    console.log(res);
  })
  .then(taskFour)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// taskTwo().then((res) => {
//   console.log(res);
// });
// taskThree().then((res) => {
//   console.log(res);
// });
console.log("End");
