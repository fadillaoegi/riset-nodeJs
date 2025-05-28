// NOTE: Function
const greeting = (name, work) => {
  return `Hello, my name is ${name} and Iam a ${work}.`;
};

const calculator = (value1, value2) => {
  const result = value1 + value2;
  return `${value1} + ${value2} = ${result}`;
};

// NOTE: variable
const name = "John";

// NOTE: object
const employee = {
  name: "Shofa",
  old: 20,
  printEmployee() {
    return `Name: ${this.name}, Age: ${this.old}`;
  },
};

// NOTE: class
class Jobdesk {
  constructor() {
    console.log("Jobdesk Class telah dibuat dan di inisialisasi");
  }
}

// NOTE: export 1
// module.exports.name = name;
// module.exports.employee = employee;
// module.exports.Jobdesk = Jobdesk;
// module.exports.greeting = greeting;
// module.exports.calculator = calculator;

// NOTE: export 2
// module.exports = {
//   name: name,
//   employee: employee,
//   Jobdesk: Jobdesk,
//   greeting: greeting,
//   calculator: calculator,
// };

// NOTE: export 3 (if same name)
module.exports = {
  name,
  employee,
  Jobdesk,
  greeting,
  calculator,
};
