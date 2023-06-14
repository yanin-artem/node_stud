const m = 5;
const n = 20;
let isSimple = true;

console.log("Простые числа:");

for (let i = m; i <= n; i++) {
  if (i < 2) continue;
  else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isSimple = false;
      }
    }
    if (isSimple) {
      console.log(i);
    }
  }
  isSimple = true;
}
