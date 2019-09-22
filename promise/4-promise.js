const heavyOperation = num => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 3000);
  });

  return promise.then(jojo => console.log(jojo));
};

heavyOperation(5);
