// find the all vowels of the given string.... (a,e,i,o,u)

function countOfVowels(words) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let ch of words) {
    if (vowels.includes(ch)) {
      count += 1;
    }
  }
  return count;
}

let words = "Hii welocome to Bihar"; //total vowel is 9
console.log(countOfVowels(words));
