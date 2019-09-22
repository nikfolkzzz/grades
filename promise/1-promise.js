getRandom = () => {
  return Math.floor(10 * Math.random());
};

const time = getRandom();
const promise = new Promise((resolve, reject) => {
  const start = () => {
    setTimeout(() => {
      if (time < 5) {
        resolve("result");
      } else {
        reject("error");
      }
    }, time * 1000);
  };
  start();
});

promise.then(result => console.log("fast"), error => console.log("slow"));
console.log(time);
