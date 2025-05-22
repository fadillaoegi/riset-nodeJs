const greeting = (name, work) => {
  return `Hello, my name is ${name} and Iam a ${work}.`;
};

const calculator = (value1, value2) => {
  return value1 + value2;
};

console.log(greeting("Nabila", "Teacher"));
console.log(calculator(5, 7));

// NOTE: export
module.exports = greeting;
module.exports = calculator;
