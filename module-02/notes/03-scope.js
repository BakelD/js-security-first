//* scope

let a = 10;

if (true) {
  a = 20; // modifies outer 'a'

  if (true) {
    //! TDZ temporal dead zone
    //! inner 'const a' shadows outer 'a' before its initialization

    // console.log(a); //! ReferenceError: Cannot access 'a' before initialization

    const a = 100; // new 'a' — scoped to this block only
    const b = 10;
  }
}

console.log(a); // 20

// console.log(b); //! ReferenceError: b is not defined
