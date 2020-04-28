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
