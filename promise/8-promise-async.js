const getS1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  });
};

const getS2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 3000);
  });
};

const show = async () => {
  console.log(1);
  const result1 = await getS1();
  console.log(result1);
  const result2 = await getS2();
  console.log(result2);
  console.log(result1 + result2);
};

show();
