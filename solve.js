//s = [{()}]

// const isValid = function (s) {
//   let charStack = [];

//   for (let i = 0; i < s.length; i++) {
//     let currentChar = s.charAt(i);
//     switch (currentChar) {
//       case '(':
//         charStack.push(')');
//         break;
//       case '{':
//         charStack.push('}');
//         break;
//       case '[':
//         charStack.push(']');
//         break;
//       default:
//         if (currentChar !== charStack.pop()) {
//           return false;
//         }
//     }
//   }

//   return charStack.length === 0;
// };

// function isValid(s) {
//   // loop through s
//   let charStack = [];
//   for (let i = 0; i < s.length; i++) {
//     let currStack = s.charAt(i);

//     switch (currStack) {
//       case '{':
//         charStack.push('}');
//         break;
//       case '[':
//         charStack.push(']');
//         break;
//       case '(':
//         charStack.push(')');
//         break;
//       default:
//         if (currStack !== charStack.pop()) {
//           return false;
//         }
//     }
//   }

//   return charStack.length === 0;
// }

// function isValid(s) {
//   let charStack = [];
//   for (let i = 0; i < s.length; i++) {
//     let currentStack = s.charAt(i);
//     switch (currentStack) {
//       case '(':
//         charStack.push(')');
//         break;
//       case '[':
//         charStack.push(']');
//         break;
//       case '{':
//         charStack.push('}');
//         break;
//       default:
//         if (currentStack !== charStack.pop()) {
//           return false;
//         }
//     }
//   }

//   return charStack.length === 0;
// }

// console.log(isValid('{[([])()]}'));

function countOccurence(s) {
  let count = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  return count;
}

console.log(countOccurence('hello'));
