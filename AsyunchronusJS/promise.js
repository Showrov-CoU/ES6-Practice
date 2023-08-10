console.log("Welcome");

const Promise1 = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve("Promise1 resolve");
  } else {
    reject("Promise1 rejected");
  }
});

const Promise2 = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve("promise2 resolve");
  } else {
    reject("Promise2 rejected");
  }
});

Promise.all([Promise1, Promise2])
  .then(([res1, res2]) => {
    console.log(res1, res2);
  })
  .catch(([res1, res2]) => {
    console.log(res1, res2);
  });
// Promise1.then(() => {
//   console.log("Promise1 resolve change");
// }).catch(() => {
//   console.log("Promise1 reject");
// });

// Promise2.then(() => {
//   console.log("Promise2 resolve");
// }).catch(() => {
//   console.log("Promise2 reject");
// });

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3 resolve");
  }, 2000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise4 resolve");
  }, 3000);
});

Promise.race([promise3, promise4]).then((res) => {
  console.log(res);
});

console.log("end");
