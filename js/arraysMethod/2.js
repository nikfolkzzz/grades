let arr = [5, 3, 8, 1];

const innerNum = (arr, a, b) => {
  return arr.filter(item => {
    return item > a && item < b;
  });
};

console.log(innerNum(arr, 3, 10));
