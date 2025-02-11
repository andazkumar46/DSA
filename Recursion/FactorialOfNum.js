function Fact(N) {
    if (N == 1)
        return 1;
    return N * Fact(N - 1);

}
console.log(Fact(5));

// second method
// let n = 5;
// let fact = 1;
// for (i = 5; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log(`factorial of ${n} is = ${fact}`);
