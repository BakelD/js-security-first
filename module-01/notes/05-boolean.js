// Boolean()
// --> !!...

// true | false

//! falsy --> 0, -0, NaN, '', null, undefined

console.log(Boolean(100)); // true
console.log(Boolean(-10)); // true
console.log(Boolean(10.5)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(0)); //! false
console.log(Boolean(-0)); //! false
console.log(Boolean(NaN)); //! false

console.log(Boolean('some')); // true
console.log(Boolean(' ')); // true
console.log(Boolean('false')); // true
console.log(Boolean('0')); // true
console.log(Boolean('')); //! false

console.log(Boolean(null)); //! false
console.log(Boolean(undefined)); //! false

console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(() => {})); // true

// --------------------------------------------
console.log(!!10); // true
console.log(!10); // false
