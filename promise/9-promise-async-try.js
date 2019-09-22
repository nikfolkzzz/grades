const getSomth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 3000);
  });
};

const show = async () => {
  const rej = await getSomth();
  console.log(rej);
};

show().catch(rej => console.log(rej));
