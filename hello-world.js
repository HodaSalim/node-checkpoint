const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Hello World");
  res.setHeader("Content-Type", "text/html");
  res.write("<h1> Hello World </h1>");
  res.end();
});

fs.writeFile("welcome.txt", "Hello Node", function (err) {
  if (err) throw err;
  console.log("File Created Successfully");
});

fs.readFile("./welcome.txt", "utf8", (err, data) =>
  err ? console.error(err) : console.log(data)
);

fs.read;
server.listen(3000);
