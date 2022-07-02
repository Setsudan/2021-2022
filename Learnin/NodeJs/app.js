const index = "./index.html";
const http = require("http");
const server = http.createServer((req, res) => {
  res.write(index);
  res.end();
});
server.listen(6969);
