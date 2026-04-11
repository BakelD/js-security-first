// task 01
// Convert total minutes to time format HH:MM
// Input: totalMinutes (number)
// Output: string in format "HH:MM" (hours and minutes always 2 digits)
// Example: 90 → "01:30", 125 → "02:05", 60 → "01:00"

const totalMinutes = 125;

const hours = Number.parseInt(totalMinutes / 60);
const minutes = totalMinutes % 60;

const timeInfo = `${totalMinutes} --> "${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}"`;

console.log(timeInfo); // '125 --> "02:05"'

//---------------------------------------------------------------------
// task 02
// Parse and validate product price input
// Input: priceString (string) — user typed price, e.g. "  €29.99  "
// Steps: trim → remove "$" → convert to number → validate
// Output:
//   if valid number → "Price: €29.99 (with 19% VAT: €35.69)"
//   if invalid → "Error: invalid price input"
// Example: "  $29.99  " → "Price: €29.99 (with 19% VAT: €35.69)"
//          "  $abc  "  → "Error: invalid price input"

const priceString = ' €29,99 ';
const normalizedStr = priceString.trim().replace('€', '').replace(',', '.');
const price = Number(normalizedStr);

if (Number.isNaN(price)) {
  console.log('Error: invalid price input');
} else {
  const priceWithTaxes = (price + price * 0.19).toFixed(2);
  console.log(`Price: €${price} (with 19% VAT: €${priceWithTaxes})`);
}

//---------------------------------------------------------------------
// task 03
// Convert between px and rem (both directions)
// Input: pixelString (string) e.g. "48px"
//        remString (string) e.g. "1.5rem"
// Base: 1rem = 16px
// Example: "20px" → "20px = 1.25rem"
//        "1.5rem" → "1.5rem = 24px"

const pixelString = '20px';
const remString = '1.5rem';

const pixelAmount = Number.parseInt(pixelString);
const remAmount = Number.parseFloat(remString);

console.log(`${pixelString} = ${pixelAmount / 16}rem`); // '20px = 1.25rem'
console.log(`${remString} = ${remAmount * 16}px`); // '1.5rem = 24px'

//---------------------------------------------------------------------
// task 04
// Ticket pricing system
// Input: ticketNumber (number)
// Even tickets → VIP seat, Odd tickets → Standard seat
// Output: string with ticket info
// Example: 1042 → "Ticket #1042 — VIP seat (even number)"
//          2571 → "Ticket #2571 — Standard seat (odd number)"

const ticketNumber = 1042;

if (!(ticketNumber % 2)) {
  console.log(`Ticket #${ticketNumber} - VIP seat (even number)`);
} else {
  console.log(`Ticket #${ticketNumber} - Standard seat (odd number)`);
}

//---------------------------------------------------------------------
// task 05
// Case-insensitive banned word checker
// Input: comment (string), bannedWord (string)
// Steps: normalize both → check includes → log result
//        bannedWord: 'absolutely spam'
// Output:
//   if found → "⚠️ Comment contains banned word: '[bannedWord]'"
//   if not found → "✅ Comment is clean"

const comment = 'This product is aBsOlUtElY SPAM!!!';
// const comment = 'Great product, highly recommended!';

const bannedWord = 'absolutely spam';

const sanitizedComment = comment.toLowerCase();
const sanitizedBannedWord = bannedWord.toLowerCase();

if (sanitizedComment.includes(sanitizedBannedWord)) {
  console.log(`⚠️ Comment contains banned word: ${bannedWord}`);
} else {
  console.log('✅ Comment is clean');
}

//---------------------------------------------------------------------
// task 06
// Credit card masking for display
// Input: creditCard (string) — 16 digit card number
// Steps: get last 4 digits → pad the rest with '*'
// Example: '1234567812345678' → '************5678'
// Output: "Payment confirmed. Card: ************5678"

const creditCard = '1234567812345678';
const maskedCard = creditCard.slice(-4).padStart(creditCard.length, '*');

console.log(`Payment confirmed. Card: ${maskedCard}`);

//---------------------------------------------------------------------
