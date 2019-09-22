const arr = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3 * 3);
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4 * 4);
    }, 3000);
  }),
];

Promise.all(arr).then(results => console.log(Array.isArray(results)));
