let nums = [5,3,1,4,6,2];
let max = nums[0];
let n = nums.length;
for(i=0; i<n; i++){
    if(nums[i] > max){
        max = nums[i];
    }
}
console.log("maximum value is =",max);

