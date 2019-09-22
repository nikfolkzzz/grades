const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});

promise
  .then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
        console.log(result * 2);
      }, 3000);
    });
  })
  .then(result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
        console.log(result * 2);
      }, 3000);
    });
  });
