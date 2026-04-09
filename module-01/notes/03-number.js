// Number()
// Number.parseInt(), Number.parseFloat()
// Number.isNaN()
// num.toFixed() ... num --> ''

// 100 | 10.5 | Infinity | -Infinity | NaN

console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(0 / 0); // NaN
console.log(10 * 'bla'); // NaN

// --------------------------------------------
console.log(Number('100')); // 100
console.log(Number.parseInt('100')); // 100
console.log(Number.parseFloat('100')); // 100

console.log(Number('10.5')); // 10.5
console.log(Number.parseInt('10.5')); // 10
console.log(Number.parseFloat('10.5')); // 10.5

console.log(Number('')); // 0
console.log(Number.parseInt('')); // NaN
console.log(Number.parseFloat('')); // NaN

console.log(Number(' ')); // 0
console.log(Number.parseInt(' ')); // NaN
console.log(Number.parseFloat(' ')); // NaN

console.log(Number('1.5rem')); // NaN
console.log(Number.parseInt('1.5rem')); // 1
console.log(Number.parseFloat('1.5rem')); // 1.5

console.log(Number('x10')); // NaN
console.log(Number.parseInt('x10')); // NaN
console.log(Number.parseFloat('x10')); // NaN

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// --------------------------------------------
// num.toFixed() ... num --> ''

const str = '5.948607';
const price = Number(Number(str).toFixed(2));

console.log(price); // 5.95

// -------------------------
const num = 5.948607;

console.log(num.toFixed()); // '6'
console.log(num.toFixed(1)); // '5.9'
console.log(num.toFixed(2)); // '5.95'
console.log(num.toFixed(3)); // '5.949'
console.log(num.toFixed(4)); // '5.9486'
console.log(num.toFixed(5)); // '5.94861'
console.log(num.toFixed(10)); // '5.9486070000'

// --------------------------------------------
// Number.isNaN()
//! it makes sense only when before was attempt to convert str --> num

const some = '55k';
const numValue = Number(some);

if (Number.isNaN(numValue)) {
  console.log('This is not a number!!!');
}

console.log(numValue); // NaN

console.log(Number.isNaN(numValue)); // true
console.log(Number.isNaN('55k')); // false
console.log(Number.isNaN(55)); // false

// Number.isNaN() the only way to check for NaN, cause
//! NaN === NaN --> false

console.log(NaN === NaN); // false

// --------------------------------------------
//* Math

console.log(Math.PI); // 3.141592653589793

console.log(Math.abs(-7)); // 7

console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.9)); // 2

console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.9)); // 1

console.log(Math.round(1.1)); // 1
console.log(Math.round(1.49)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.9)); // 2

console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8
console.log(Math.sqrt(144)); // 12

console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

console.log(Math.random()); // ... [0, 1)

const minValue = 1;
const maxValue = 101; // not includes

const randomNumber = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
console.log(randomNumber); // e.g. 21
