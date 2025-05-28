// get arguments from command line

// NOTE: import
const command = process.argv[2];
const yargs = require("yargs");

// NOTE: add data
yargs.command(
  "add",
  "Create new data user",
  () => {},
  (argv) => {
    console.log(argv.name);
  }
);

// NOTE: List data
yargs.command(
  "list",
  "List data",
  () => {},
  (argv) => {
    console.log(argv.name);
  }
);
// NOTE: List detail data
// NOTE: Delete data

// NOTE: execute
yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);
