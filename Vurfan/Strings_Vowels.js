//!===========Method to count number of vowels in a string=======================
let Vowels = ["a", "e", "i", "o", "u"];
function CountVowels(text) {
  let count = 0;
  for (let letter of text.toLowerCase()) {
    if (Vowels.includes(letter)) {
      count++;
    }
  }
  console.log(`The text contains ${count} of vowels `);
  return count;
}

//!========Another example==================

let countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;
console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0

