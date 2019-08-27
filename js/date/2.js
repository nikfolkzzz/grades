let date = new Date(2012, 0, 3); // 3 января 2012 года
const getLocalDay = date => {
  if (date.getDay() == 0) {
    return 7;
  }

  return date.getDay();
};
console.log(getLocalDay(date));
