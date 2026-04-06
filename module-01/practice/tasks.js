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
