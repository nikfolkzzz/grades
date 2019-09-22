const heavyOperation = num => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 3000);
  });

  return promise.then(jojo => console.log(jojo));
};

const num = [1, 2, 3, 4, 5];

Promise.all(num.map(heavyOperation)).then(results => console.log(results));
