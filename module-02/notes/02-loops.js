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

//---------------------------------------------------------------------
//* while
//  use when number of iterations is unknown in advance

const secret = 7;
let guess = 0;
let attempts = 0;

while (guess !== secret) {
  guess = Math.floor(Math.random() * 10) + 1;
  attempts += 1;

  console.log(`Attempt ${attempts}: guessed ${guess}`);
}

console.log(`✅ Found! It took ${attempts} attempts`);

//---------------------------------------------------------------------
//* do/while
// executes at least once — condition checked AFTER first run

let userPassword;

do {
  userPassword = prompt('Enter password (3-12 characters):');
} while (userPassword === null || userPassword.length < 3 || userPassword.length > 12);

console.log(`✅ Password accepted`);

//----------------------
//! condition - false ... still do/while executes once

let i = 100;

do {
  console.log(i);
} while (i <= 10);
