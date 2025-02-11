function CountDown(n) {
    if (n == 0) {
        console.log(0);
        return;

    }
    console.log(n);
    CountDown(n - 1);

}
CountDown(10);