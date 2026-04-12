//* arithmetic
// *, /, %, +, -, ++, --, **
// *=, /=, %=, +=, -=

console.log(5 * 4); // 20
console.log(18 / 4); // 4.5
console.log(17 % 7); // 3
console.log(9 % 11); // 9
console.log(10 + 2); // 12
console.log(100 - 1); // 99
console.log(9 ** 2); // 81

//--------------------------
let num = 100;

num *= 3;
console.log(num); // 300

num /= 5;
console.log(num); // 60

num %= 13;
console.log(num); // 8

num += 8;
console.log(num); // 16

num -= 11;
console.log(num); // 5

//--------------------------
let some = 10;

console.log(++some); // 11... increments FIRST, returns new value
console.log(some++); // 11... returns current value, increments AFTER
console.log(some); // 12

console.log(--some); // 11
console.log(some--); // 11
console.log(some); // 10

//! avoid in production
console.log(some++ + ++some); // ... 10 + 12 --> 22

//---------------------------------------------------------------------
//* comparison
// >, >=, <, <=, ==, !=, ===, !==

console.log(10 > 5); // true
console.log(10 >= 5); // true
console.log(10 < 5); // false
console.log(10 <= 5); // false

console.log(10 == '10'); // true  //! type coercion
console.log(10 != '10'); // false //! type coercion
console.log(10 === '10'); // false
console.log(10 !== '10'); // true

//---------------------------------------------------------------------
//* logical
// &&, ||, !

// && returns first FALSY value, or last value if all truthy
// || returns first TRUTHY value, or last value if all falsy
//! they don't return true/false — they return actual values

console.log(100 && Infinity && NaN && true); // NaN
console.log('some' && 0 && 100); // 0
console.log(true && 1 && 'JS'); // 'JS'
console.log(-10 && 'false' && null); // null
console.log(42 && 10 > 11 && undefined); // false

console.log(true || NaN || 10 || null); // true
console.log(0 || null || undefined); // undefined
console.log('' || 42 || Infinity); // 42
console.log(undefined || '' || ' ' || 100); // ' '

console.log(!''); // true
console.log(!0); // true
console.log(!10); // false

//! && has higher priority than ||
console.log(true || (0 && 5)); // true
console.log((true || 0) && 5); // 5
