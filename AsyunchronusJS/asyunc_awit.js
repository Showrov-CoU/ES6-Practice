console.log("Welcome");

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task1 completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    resolve("task2 completed");
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    // resolve("task3 completed");
    setTimeout(() => {
      resolve("task3 completed");
    }, 10);
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task4 completed");
  });
};

const allTaskCall = async () => {
  try {
    console.log(await taskOne());
    console.log(await taskTwo());
    console.log(await taskThree());
    console.log(await taskFour());
  } catch (error) {
    console.log(error);
  }
};

allTaskCall();

console.log("end");

//................promise with async await..................//
const func1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Showrov from func1....!!");
    }, 1000);
  });
};
const func2 = () => {
  return new Promise((resolve, reject) => {
    resolve("Hello Showrov from func2....!!");
  });
};

func1()
  .then((res) => {
    console.log(res);
  })
  .then(func2)
  .then((res) => {
    console.log(res);
  });

// const callAllFunc = async () => {
//   console.log(await func1());
//   console.log(await func2());
// };
// callAllFunc();*/

const func3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Showrov from func3....!!");
    }, 1000);
  });
};

func3().then((res) => {
  console.log(res);
});
