// task 01
// Traffic light advisor
// Input: light (string) — 'red', 'yellow', 'green'
// Output:
//   'red'    → "🛑 Stop!"
//   'yellow' → "⚠️ Slow down!"
//   'green'  → "✅ Go!"
//   other    → "🚫 Invalid signal"

const light = 'green';

if (light === 'red') {
  console.log('🛑 Stop!');
} else if (light === 'yellow') {
  console.log('⚠️ Slow down!');
} else if (light === 'green') {
  console.log('✅ Go!');
} else {
  console.log('🚫 Invalid signal');
}

// -------------------------

switch (light) {
  case 'red': {
    console.log('🛑 Stop!');
    break;
  }

  case 'yellow': {
    console.log('⚠️ Slow down!');
    break;
  }

  case 'green': {
    console.log('✅ Go!');
    break;
  }

  default: {
    console.log('🚫 Invalid signal');
  }
}

//---------------------------------------------------------------------
// task 02
// Age verification for alcohol purchase
// Input: age (number)
// Output:
//   if allowed → "✅ Purchase allowed"
//   if not → "🔞 Sorry, you must be 18 or older"

const age = 16;

if (age >= 18) {
  console.log('✅ Purchase allowed');
} else {
  console.log('🔞 Sorry, you must be 18 or older');
}

// -------------------------

const ageVerificationMsg = age >= 18 ? '✅ Purchase allowed' : '🔞 Sorry, you must be 18 or older';
console.log(ageVerificationMsg);

//---------------------------------------------------------------------
// task 03
// Day type checker
// Input: day (string) e.g. 'Monday'
// Output:
//   'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' → "💼 Workday"
//   'Saturday', 'Sunday' → "🎉 Weekend"
//   other → "🚫 Invalid day"
// Use switch with fall-through pattern

const day = 'Monday';

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday': {
    console.log('💼 Workday');
    break;
  }

  case 'Saturday':
  case 'Sunday': {
    console.log('🎉 Weekend');
    break;
  }

  default: {
    console.log('🚫 Invalid day');
  }
}

//---------------------------------------------------------------------
// task 04
// Multiplication table
// Input: num (number)
// Output: print multiplication table for that number (1 to 10)
// Example for num = 7:
//   "7 x 1 = 7"
//   "7 x 2 = 14"
//   ...
//   "7 x 10 = 70"

const num = 7;

for (let i = 1; i <= 10; i += 1) {
  console.log(`${num} x ${i} = ${num * i}`);
}

//---------------------------------------------------------------------
// task 05
// Launch countdown
// Count down from 30 to 0 with step 5
// Output:
//   "🚀 T-30 seconds"
//   "🚀 T-25 seconds"
//   ...
//   "🚀 T-00 seconds"
//   "🔥 Launch!"

const start = 30;
const end = 0;
const step = 5;

for (let i = start; i >= end; i -= step) {
  console.log(`🚀 T-${String(i).padStart(2, 0)} seconds`);
}

console.log('🔥 Launch!');

//---------------------------------------------------------------------
// task 06
// Print all odd numbers in range
// Input: min (number), max (number)
// Two solutions:
//   Solution 1 — full loop with odd check (step 1, filter inside)
//   Solution 2 — smart start + step 2 (no check needed)
// Output: print each odd number on new line
// Test with: min = 2, max = 20

const min = 2;
const max = 20;

// 1
for (let i = min; i <= max; i += 1) {
  if (i % 2) {
    console.log(i);
  }
}
console.log('-----------------------');

// smart start
const smartStart = !(min % 2) ? min + 1 : min;

for (let i = smartStart; i <= max; i += 2) {
  console.log(i);
}
console.log('-----------------------');

//---------------------------------------------------------------------
// task 07
// Interactive number sum collector
// Ask user for a number 3 times using prompt()
// Output:
//   each round → "Enter number [count] of [attempts]:"
//   invalid input → "[input] is not a number. Try again!" (skip, don't count)
//   cancelled → "You finished the game !!!" + stop loop
//   end → "Total sum is [sum]"
// Rules:
//   if prompt returns null → cancelled → stop
//   if input is not a number → skip iteration
//   count only valid numbers toward the 3 total

const numOfAttempts = 3;
let total = 0;
let counter = 1;

while (counter <= numOfAttempts) {
  const userAnswer = prompt(`Enter number ${counter} of ${numOfAttempts}:`);

  if (userAnswer === null) {
    alert('You finished the game !!!');
    break;
  }

  const num = Number(userAnswer);

  if (Number.isNaN(num)) {
    alert(`${userAnswer} is not a number. Try again!`);
    continue;
  }

  total += num;
  counter += 1;
}

alert(`Total sum is ${total}`);

//---------------------------------------------------------------------
