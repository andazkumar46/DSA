// // let nums = [6,4,3,8,9,7] the sort in the accending order.
let nums = [6,4,3,8,9,7];
let n = nums.length;
for(let i=0; i<n-1; i++){
    for (let j=0 ; j<n-i-1; j++){
        if(nums[j] > nums[j+1]){
            //swap
            temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
    }
}
console.log("Sort in Ascending Order ",nums);


// // let nums = [6,4,3,8,9,7] the sort in the deccending order.

let num = [6,4,3,8,9,7];
let p = num.length;
for(i=0; i<p-1; i++){
    for(j=0; j<p-i-1; j++){
        if(num[j] < num[j+1]){
            //swap
        temp = num[j];
        num[j] = num[j+1];
        num[j+1] = temp;
    }
    }
}
console.log("Sort in Descending Order ",num);


