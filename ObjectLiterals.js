const objetctReturn = (name, age) => {
  return {
    name,
    age,
  };
};
console.log(objetctReturn("Showrov", 25));

const message = {
  body() {
    return "I am object function";
  },
};

console.log(message.body());