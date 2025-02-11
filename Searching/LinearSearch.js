let nums = [5,1,2,8,7,9]
let n = nums.length;
let key = 8;
let found = false;

for(i=0; i<n; i++){
    // console.log(nums[i]);
    if(nums[i] == key){
        found = true;
        console.log("Element found at index =",i);
        break;
     }
        
}
if(found == false)     
console.log("Element Not Found");
    
