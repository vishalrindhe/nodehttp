const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello </h1>");
  res.write("<h1>Hello </h1>");
  res.write("hello world"); //here this hello world can see in browser/postman
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is ruuning on port ${PORT}`));
