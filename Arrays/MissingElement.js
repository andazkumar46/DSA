let nums = [0,1,2,4,5,6]; // her [0-8] find the missing number of the array
// nums.sort((a,b) => a-b);
// console.log(nums);
// let n= nums.length;


// for(i=0; i<=n; i++){
//     if(nums[i] != i){
//         console.log("Messing element is",i); // ans will be 6
        
//     }
// }


// second method
let n = nums.length;
let sum = n*(n+1)/2;
// let ans = 0;
// console.log(sum);

for(i=0; i<n; i++){
    sum = sum-nums[i]   
}
console.log(sum); 


// let missingelement = sum - ans;
// console.log(missingelement);

