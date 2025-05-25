// NOTE: before use module import change "value type" from package.json to "module"
import validator from "validator";
import chalk from "chalk";

const isEmail = validator.isEmail("testexample.com");
console.log(isEmail); // true

const isPhone = validator.isMobilePhone("121212121121", "id-ID");
console.log(isPhone); // false

const message = chalk.bgGreen.bold.black("⚠️ Warning");
console.log(message);
