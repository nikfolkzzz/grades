const getSome = () => {
  return new Promise((resolve, reject) => {
    const flag = true;
    setTimeout(() => {
      if (flag) {
        resolve("result");
      } else {
        reject("error");
      }
    }, 3000);
  });
};

const show = async () => {
  try {
    const rej = await getSome();
    console.log(rej);
  } catch (error) {
    console.log(error);
  }
};

show();
