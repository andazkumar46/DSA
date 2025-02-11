let nums = [1, 2, 3, 4, 8, 9];
target = 5;
let n = nums.length;
let ans = false;
for (i = 0; i < n; i++) {
  if (nums[i] == target) {
    ans = true;
    console.log(i);
  }
}
if (ans == false) {
  console.log("key NA");
}
// pending still now
