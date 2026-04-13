//* if | if/else | if/else if

const myScore = 4;
const opponentScore = 1;

// if
if (myScore > opponentScore) {
  console.log('I won.');
}

// if/else
if (myScore > opponentScore) {
  console.log('I won.');
} else {
  console.log('I lost.');
}

// if/else if
if (myScore > opponentScore) {
  console.log('I won.');
} else if (myScore < opponentScore) {
  console.log('I lost.');
} else {
  console.log('Tie.');
}

// --------------------------------------------
//* ?: ternary operator

const result = myScore > opponentScore ? 'I won.' : 'I lost.';
console.log(result);

//! avoid in production (hard to read)
// const result = myScore > opponentScore ? 'I won.' : myScore < opponentScore ? 'I lost.' : 'Tie.';

// --------------------------------------------
//* switch

const mark = 'A';

switch (mark) {
  case 'A': {
    console.log('🏆 Excellent!');
    break;
  }

  case 'B': {
    console.log('⭐ Very Good.');
    break;
  }

  case 'C': {
    console.log('✅ Good.');
    break;
  }

  case 'D': {
    console.log('⚠️ Ok.');
    break;
  }

  case 'E': {
    console.log('❌ Bad');
    break;
  }

  default: {
    console.log('🚫 Wrong mark!');
  }
}

// -------------------------
//* switch — fall-through pattern (multiple cases, one outcome)

const monthNumber = 6;

switch (monthNumber) {
  case 12:
  case 1:
  case 2: {
    console.log('❄️ Winter.');
    break;
  }

  case 3:
  case 4:
  case 5: {
    console.log('🌸 Spring.');
    break;
  }

  case 6:
  case 7:
  case 8: {
    console.log('☀️ Summer.');
    break;
  }

  case 9:
  case 10:
  case 11: {
    console.log('🍁 Fall.');
    break;
  }

  default: {
    console.log('🚫 Wrong number!');
  }
}

// -------------------------
//! exercise only — not for production

const age = 21;

switch (true) {
  case age >= 0 && age < 18: {
    console.log('Kids.');
    break;
  }

  case age >= 18 && age < 60: {
    console.log('Adults.');
    break;
  }

  case age >= 60 && age <= 100: {
    console.log('Seniors.');
    break;
  }

  default: {
    console.log('Diff age category.');
  }
}

//! exercise only — not for production (switch with && hack)

switch (age) {
  case age >= 0 && age < 18 && age: {
    console.log('Kids.');
    break;
  }

  case age >= 18 && age < 60 && age: {
    console.log('Adults.');
    break;
  }

  case age >= 60 && age <= 100 && age: {
    console.log('Seniors.');
    break;
  }

  default: {
    console.log('Diff age category.');
  }
}
