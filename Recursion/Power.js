// Method 1

// Case 1 when x is positive

// function pow(n, x) {
//     if (x == 0) return 1;
//     return n * pow(n, x - 1)
// }
// console.log(pow(3, 3))


// Case 2 When x is negative value 

// function pow(n, x) {
//     if (x == 0) return 1;

//     if (x < 0)
//         return 1 / pow(n, -x);
//     else
//         return n * pow(n, x - 1);
// }
// console.log(pow(5, 3));
// console.log(pow(5, -3));

// Method 2

function pow(n, x) {
    if (x == 0)
        return 1;
    return pow(n, x/2) * pow(n, x/2);
}
console.log(pow(5, 4))



