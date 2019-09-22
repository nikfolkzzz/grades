const heavyOperation = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num != 0) {
        resolve(num * num);
      } else {
        reject("error");
      }
    }, 3000);
  });
};
nums = [1, 2, 0, 4];
Promise.all(nums.map(heavyOperation)).then(
  results => console.log(results),
  error => console.log("error"),
);
