// String()
// "" | '' | `${}` template string

// ... + '' --> ''

const firstName = 'Daniel';
const lastName = 'Bakel';
const fullName = `${firstName} ${lastName}`;

console.log(fullName); // 'Daniel Bakel'
console.log(fullName.length); // 12

console.log(fullName.at(0)); // 'D'
console.log(fullName[0]); // 'D'

console.log(fullName.at(-1)); // 'l'
console.log(fullName[fullName.length - 1]); // 'l'

// --------------------------------------------
// methods

// .at() | .charAt()
console.log(firstName.at(1)); // 'a'
console.log(firstName.charAt(1)); // 'a'
console.log(firstName[1]); // 'a'

console.log(firstName.at(-1)); // 'l'
console.log(firstName.charAt(-1)); // ''
console.log(firstName[-1]); // undefined

console.log(firstName.at(10)); // undefined
console.log(firstName.charAt(10)); // ''
console.log(firstName[10]); // undefined

// .concat()
console.log(firstName.concat(' is awesome!!!')); // 'Daniel is awesome!!!'
console.log(firstName); // 'Daniel'

// .includes() | .indexOf() | .lastIndexOf()
console.log(firstName.includes('ni')); // true
console.log(firstName.includes('z')); // false

console.log(firstName.indexOf('a')); // 1
console.log(firstName.indexOf('z')); // -1

console.log(fullName.lastIndexOf('a')); // 8
console.log(fullName.lastIndexOf('z')); // -1

// .slice() | .substring()
console.log(fullName.slice(7)); // 'Bakel'
console.log(fullName.substring(7)); // 'Bakel'

console.log(fullName.slice(0, 3)); // 'Dan'
console.log(fullName.substring(0, 3)); // 'Dan'

console.log(fullName.slice(-5)); // 'Bakel'
console.log(fullName.substring(-5)); //! -5 --> 0, so ... 'Daniel Bakel'

// .replace() | .replaceAll()
console.log(fullName.replace('a', '*')); // 'D*niel Bakel'
console.log(fullName.replaceAll('a', '*')); // 'D*niel B*kel'

console.log(fullName.replace(/a/g, '*')); // 'D*niel B*kel'
console.log('DAniel Bakel'.replace(/a/gi, '*')); // 'D*niel B*kel'

// .repeat()
console.log('Dan'.repeat(3)); // 'DanDanDan'

// .split() '' --> []
console.log('some info text'.split(' ')); // ['some', 'info', 'text']
console.log('some text'.split('')); // ['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't']
console.log('some text'.split()); // ['some text']

// .startsWith() | .endsWith()
console.log(firstName.startsWith('Dan')); // true
console.log(firstName.startsWith('dan')); // false

console.log(firstName.endsWith('el')); // true
console.log(firstName.endsWith('al')); // false

// .padStart() | .padEnd()
console.log('some'.padStart(5, '*')); // '*some'
console.log('some'.padEnd(8, '-')); // 'some----'

// .toLowerCase() | .toUpperCase()
console.log(firstName.toLowerCase()); // 'daniel'
console.log(firstName.toUpperCase()); // 'DANIEL'
console.log(firstName); // 'Daniel'

// .trim()
console.log(' some  '.trim()); // 'some'

console.log(' some  '.length); // 7
console.log(' some  '.trim().length); // 4
