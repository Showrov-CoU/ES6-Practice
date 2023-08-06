const defaultParameter = (text = "default") => {
  console.log(`This is "${text}" parameter`);
};
defaultParameter();
defaultParameter("Not default ");

const restParameter = (x, y, ...z) => {
  console.log(`X is = ${x} , Y is ${y} and Z is ${z}`);
  console.log(typeof x, typeof y, typeof z);
  console.log(Array.isArray(z));
  console.log(z[2]);
};
restParameter(4, 5, 6, 7, 8, 9);
