const taskOne = (myCallBack) => {
  console.log("Task1");
  myCallBack();
};

const taskTwo = (myCallBack) => {
  setTimeout(() => {
    console.log("Task2. Data loading...!");
    myCallBack();
  }, 1000);
};

const taskThree = (myCallBack) => {
  console.log("Task3");
  myCallBack();
};

const taskFour = () => {
  console.log("Task4");
};

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour();
    });
  });
});

//square a value
const square = (x) => {
  console.log(`Square of ${x} is: ${x * x}`);
};

const higherOrder = (num, myCallback) => {
  myCallback(num);
};
higherOrder(7, square);

// add two number
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(6, 6, (x) => {
  console.log(x);
});