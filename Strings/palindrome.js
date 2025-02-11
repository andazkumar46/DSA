// let str = "madame";
// let n = str.length;
// console.log(n);
// for (let i = 0; i < n; i++) {
//   if (str[i] == str[n - 1 - i]) {
//   }
//   console.log("true");
// }

// <-..............1st Method by using the for loop.............. ->

// function palindrome(str) {
//   let n = str.length;
//   for (let i = 0; i < n; i++) {
//     if (str[i] == str[n - 1 - i]) {
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("madame"));

// <-................ 2nd Method ....................->

function checkPalindrome(str) {
  let n = str.length;
  let s = 0;
  let e = n - 1;
  while (s <= e) {
    if (str[s] != str[e]) {
      return false;
      break;
    }
    s++;
    e--;
  }
  return true;
}
let str = "racecar";
console.log(checkPalindrome(str));

let s = "asdfg";
let p = s.char;
