// null
// undefined

console.log(null == undefined); //! true ... (equal only each other, nothing else)
console.log(null === undefined); // false

console.log(null >= 0); // true
console.log(null > 0); // false
console.log(null == 0); //! false

// Number(null) --> 0, Number(false) --> 0, BUT...
console.log(null == 0); //! false
console.log(null == false); //! false

// Number(undefined) --> NaN
console.log(undefined == 0); // false
console.log(undefined == false); // false
