let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

const sumSalaries = obj => {
  return [...Object.values(obj)].reduce((p, n) => p + n);
};

console.log(sumSalaries(salaries)); // 650
