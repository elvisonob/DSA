/*
Reverse an array manually using a for loop (no .reverse()).
*/

const arr = [1, 2, 3, 4, 5, 6, 7];

let reverseArray = [];

// reverse an array, starting with highest to lowest

for (let i = arr.length - 1; i >= 0; i--) {
  reverseArray.push(arr[i]);
}

console.log(reverseArray);
