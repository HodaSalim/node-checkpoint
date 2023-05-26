const http = require("http");

const hello = http.createServer((req, res) => {
  console.log("Hello World");
});

hello.listen(3000);
