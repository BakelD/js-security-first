//* for

const min = 1;
const max = 10;
const step = 3;

// 1 --> 10
for (let i = min; i <= max; i += 1) {
  console.log(`⬆️ ${i}`);
}
console.log('----------------------');

// 10 --> 1
for (let i = max; i >= min; i -= 1) {
  console.log(`⬇️ ${i}`);
}
console.log('----------------------');

// 1 --> 10 ... with step = 3
for (let i = min; i <= max; i += step) {
  console.log(i);
}
console.log('----------------------');

//* break
// 1 --> 7 ... break
for (let i = min; i <= max; i += 1) {
  if (i === 8) {
    console.log('⛔');
    break;
  }

  console.log(i);
}
console.log('----------------------');

//* continue
// 1 --> 10 ... skip 8
for (let i = min; i <= max; i += 1) {
  if (i === 8) {
    console.log('👉');
    continue;
  }

  console.log(i);
}
console.log('----------------------');
