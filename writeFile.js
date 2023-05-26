const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", function (err) {
  if (err) throw err;
  console.log("File Created Successfully");
});

fs.readFile("./welcome.txt", "utf8", (err, data) =>
  err ? console.error(err) : console.log(data)
);

fs.read;
