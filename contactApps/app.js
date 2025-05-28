const { saveContact, question } = require("./contacts");

// NOTE: MAIN FUNCTION
const mainFcntion = async () => {
  try {
    const name = await question("name");
    const age = await question("age");
    const email = await question("email");

    // Validasi input kosong
    if (!name.trim() || !age.trim() || !email.trim()) {
      console.log("❌ Semua input harus diisi. Program dibatalkan.");
      input.close();
      return;
    }

    saveContact(name, age, email);
    console.log("✅ Data berhasil disimpan!");
  } catch (error) {
    console.error(error);
  }
};

// NOTE: call main
mainFcntion();

// NOTE: Use with callback Hell
// input.question("Please, input your name: ", (name) => {
//   if (!name.trim()) {
//     console.log("name is required");
//   }
//   input.question("please, input your age: ", (age) => {
//     if (!age.trim()) {
//       console.log("age is required");
//     }
//     input.question("please, input your phone: ", (phone) => {
//       if (!phone.trim()) {
//         console.log("phone is required");
//       }

//       const fileName = "dataUser";

//       // NOTE: create directori
//       const dirPath = "./data";
//       if (!fs.existsSync(dirPath)) {
//         fs.mkdirSync(dirPath);
//       }

//       // NOTE: create file
//       const filePath = `${dirPath}/${fileName}.json`;
//       if (!fs.existsSync(filePath)) {
//         fs.writeFileSync(filePath, JSON.stringify({ users: [] }));
//         // fs.writeFileSync(filePath, "[]", "utf8");
//       }

//       // NOTE: write data from input to fileJson
//       const dataUser = [];
//       const dataBuffer = fs.readFileSync("data/dataUser.json", "utf8");
//       const dataJson = JSON.parse(dataBuffer);
//       dataJson.users.push({
//         name: name.trim(),
//         age: parseInt(age.trim(), 10),
//         phone: phone.trim(),
//       });
//       fs.writeFileSync(filePath, JSON.stringify(dataJson, null, 2));

//       // NOTE: close sesi run
//       input.close();
//     });
//   });
// });
