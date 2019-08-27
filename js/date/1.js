const date = new Date(2012, 0, 3); // 3 января 2012 года
const getWeekDay = date => {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "ВС"];
  return days[date.getDay()];
};

console.log(getWeekDay(date)); // нужно вывести "ВТ"
