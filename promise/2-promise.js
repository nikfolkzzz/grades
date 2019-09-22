const promise = new Promise((resolve, reject) => {
  console.log("1");
  setTimeout(() => resolve("result"), 3000);
});

promise
  .then(result => {
    return new Promise((resolve, reject) => {
      console.log("2");
      setTimeout(() => {
        resolve(result + "!");
        reject("error");
      }, 2000);
    });
  })
  .then(result => {
    console.log("3");
    return result + "?";
  })
  .then(result => console.log(result));
