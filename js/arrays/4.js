let arr = [];
while (true) {
  let inp = prompt();
  if (!isFinite(inp) || inp == null || inp == "") {
    break;
  } else {
    arr.push(Number(inp));
  }
}
let sum = 0;
for (let item of arr) {
  sum = sum + item;
}
console.log(sum);
