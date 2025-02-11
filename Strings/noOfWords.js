function noOfWords(str) {
  let n = str.length;
  let spaces = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] == " ") {
      spaces += 1;
    }
  }
  words = spaces + 1;
  return words;
}

let str = "My Name Is Andaz Kumar"; // ans should be 5
console.log(`total no of words is = ${noOfWords(str)}`);
