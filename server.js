const http = require("http");

const todos = [
  { id: 1, text: "todo One" },
  { id: 2, text: "todo two" },
  { id: 3, text: "todo three" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "Node.js");
  //res.write("<h1>Hello </h1>");
  //res.write("<h1>Hello </h1>");
  //res.write("hello world"); //here this hello world can see in browser/postman
  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is ruuning on port ${PORT}`));
