function sumOfNum(n) {
  //base case
  if (n == 1)
    return 1;

  return n + sumOfNum(n - 1);
}
console.log(sumOfNum(5));
