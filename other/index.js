const http = require("http");

const PrintHelloWorld = (req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.write("Hello world");
  res.end();
};

http.createServer(PrintHelloWorld).listen(1337);

//Writing a promise...
var myPromise = new Promise((reject, resolve) => {
  setTimeout(function logName() {
    let username = "vipul";
    console.log(username);
    if (username) {
      resolve(username);
    } else {
      reject("There is some error...");
    }
  }, 2000);
});

myPromise.then(
  value => {
    console.log(value);
  },
  value => {
    console.log(value);
  }
);

isBracketMatching = input => {
  const bracketsStack = [];
  const bracketsMap = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  input.split("").forEach(current => {
    if (Object.keys(bracketsMap).find(x => x === current)) {
      bracketsStack.push(current);
    } else {
      const poppedValue = bracketsStack.pop();
      if (current !== bracketsMap[poppedValue]) return false;
    }
  });
  return bracketsStack.length === 0;
};

console.log("CPU numbers:", require("os").cpus().length);

console.log("Server created sucessfully! Listening to port 1337...");
