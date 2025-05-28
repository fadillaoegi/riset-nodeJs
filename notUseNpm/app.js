// NOTE: UNCOMMENT (ONLY ONE) FOR TESTING CODE

const fs = require("fs");
const rl = require("readline");

// const name = "Shofa Nabila";

// NOTE: Syncronous make and write file
// const wrSync = fs.writeFileSync(
//     "data/output.txt",
//     `Hello, World! \n my name is ${name}`
// );

// NOTE: Asyncronous make and write file
// const wrAsync = fs.writeFile(
//   "data/output.txt",
//   `Hello, World! \n my name is ${name}`,
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File has been written");
//     }
//   }
// );

// NOTE: Syncrononus read
// const readData = fs.readFileSync("data/output.txt", "utf8");
// console.log(readData);

// NOTE: Asyncrononus read
// const readData = fs.readFile("data/output.txt", "utf8", (err, data
// ) =>
//     {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// NOTE: ReadLine input
const input = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Please enter your name: ", (name) => {
  if (!name.trim()) {
    console.log("Name is empty");
    input.close();
    return;
  }

  input.question("Please enter your age: ", (age) => {
    if (!age.trim()) {
      console.log("Age is empty");
      input.close();
      return;
    }

    input.question("Please enter your address: ", (city) => {
      if (!city.trim()) {
        console.log("city is empty");
        input.close();
        return;
      }

      const userData = {
        name: name.trim(),
        age: age.trim(),
        city: city.trim(),
      };

      // Read file and update array
      fs.readFile("data/userdata.json", "utf8", (err, data) => {
        let userDataJson = [];
        if (!err && data) {
          try {
            userDataJson = JSON.parse(data);
            if (!Array.isArray(userDataJson)) {
              userDataJson = [];
            }
          } catch (e) {
            console.log("Error parsing JSON, mulai dengan array kosong.");
          }
        }

        // add new userdata
        userDataJson.push(userData);

        // Save to file
        fs.writeFile(
          "data/userdata.json",
          JSON.stringify(userDataJson, null, 2),
          (err) => {
            if (err) {
              console.log("Gagal menyimpan data:", err);
            } else {
              console.log("Data berhasil disimpan!");
            }
            input.close();
          }
        );
      });
    });
  });
});
