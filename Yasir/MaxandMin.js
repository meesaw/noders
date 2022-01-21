// Finding Max and Min values in the list of Integers 
const array = [5, 2, 3, 8, 16];
let max = array[0],
    min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) { max = array[i]; }
    if (array[i] < min) { min = array[i]; }
}
console.log("max = " + max);
console.log("min = " + min);