const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // promise return onli error
    // resolve("result");
    reject("error");
  }, 3000);
});

promise
  .then(
    result => {
      console.log(1);
      return result + "!";
    },
    // error throw to catch
    error => {
      throw new Error("it was mistake");
    },
  )
  .then(result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve(result + "?");
        reject("error");
      }, 2000);
    });
  })
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
