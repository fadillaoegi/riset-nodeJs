const rl = require("readline");
const fs = require("fs");
const { saveContact } = require("./contacts");

const input = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (x) => {
  return new Promise((resolve, reject) => {
    input.question(`Enter your ${x}: `, (x) => {
      resolve(x.trim());
    });
  });
};

const saveContact = (name, age, email) => {
  const fileName = "dataUser";
  const dirPath = "./data";
  const filePath = `${dirPath}/${fileName}.json`;

  // NOTE: create directori
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // NOTE: create file
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ users: [] }));
    // fs.writeFileSync(filePath, "[]", "utf8");
  }

  // NOTE: write data from input to fileJson
  const dataUser = [];
  const dataBuffer = fs.readFileSync("data/dataUser.json", "utf8");
  const dataJson = JSON.parse(dataBuffer);

  // NOTE: Checking if data already exist
  // const is

  dataJson.users.push({
    name: name.trim(),
    age: parseInt(age.trim(), 10),
    email: email.trim(),
  });
  fs.writeFileSync(filePath, JSON.stringify(dataJson, null, 2));
  input.close();
};

module.exports = {
  question,
  saveContact,
};
