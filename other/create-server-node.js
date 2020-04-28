const http = require("http");

const PrintHelloWorld = (req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.write("Hello world");
  res.end();
};

http.createServer(PrintHelloWorld).listen(1337);
console.log("Server created sucessfully! Listening to port 1337...");
