function fib(n) {

    // if (n == 0)
    //     return 0;
    // if (n == 1)
    //     return 1;

    if (n == 0 || n == 1)
        return n;

    return fib(n - 1) + fib(n - 2);
}
for (i = 0; i <= 3; i++)
    console.log(fib(i));
