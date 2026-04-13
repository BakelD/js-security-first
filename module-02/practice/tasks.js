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
