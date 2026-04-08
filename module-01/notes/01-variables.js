const num = 10;
let some;

console.log(num); // 10
console.log(some); // undefined

// num = 100; //! TypeError: Assignment to constant variable.
some = 100;

console.log(num); // 10
console.log(some); // 100

// let some = 101; //! SyntaxError: Identifier 'some' has already been declared

// SyntaxError occurs during code evaluation (prevents the code from running at all)
