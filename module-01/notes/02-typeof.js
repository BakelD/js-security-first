console.log(typeof 'text'); // 'string'
console.log(typeof '100'); // 'string'
console.log(typeof ''); // 'string'
console.log(typeof ' '); // 'string'

console.log(typeof 100); // 'number'
console.log(typeof -10); // 'number'
console.log(typeof 10.5); // 'number'
console.log(typeof 0); // 'number'
console.log(typeof -0); // 'number'
console.log(typeof Infinity); // 'number'
console.log(typeof NaN); // 'number'

console.log(typeof 1000000n); // 'bigint'
console.log(typeof 1n); // 'bigint'

console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'

//! JS bug!
console.log(typeof null); // 'object'

let some;
console.log(typeof some); // 'undefined'

// --------------------------------------------

//! typeof [] ---> 'object'
console.log(typeof []); // 'object'

console.log(typeof {}); // 'object'
console.log(typeof (() => {})); // 'function'
