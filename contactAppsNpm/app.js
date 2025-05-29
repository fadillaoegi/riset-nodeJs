// NOTE: import
// const command = process.argv[2];
const yargs = require("yargs")
// const {saveContact} = require("./contacts")

// NOTE: add data
yargs
  .command({
    command: "add",
    describe: "Add new contact",
    builder: {
      name: {
        describe: "Contact name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Contact email",
        demandOption: true,
        type: "string",
      },
      phone: {
        describe: "Contact phone",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      const newContact = {
        name: argv.name,
        email: argv.email,
        phone: argv.phone,
      }
      console.log(newContact)
      // saveContact(newContact);
    },
  })
  .demandCommand()

// NOTE: List data

// NOTE: List detail data
// NOTE: Delete data

// NOTE: execute
yargs.parse()

// console.log(process.argv);
// console.log(yargs.argv);
