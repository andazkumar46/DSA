//Q. given that nums = [1,3,4,5,7,8,9,11,12] and key = 9. find the index of key if its present in the array.

let nums = [1,4,5,7,8,9,11,12];
let n= nums.length;
let s = 0;
let e = n-1;
let key = 12;
found = false;
while(s<=e){

    let m = Math.floor((s+e)/2);   // midle of the array
    if(nums[m] == key){
        found = true;
        console.log("Key is present at index",m);
        break;
    }else if(key > nums[m]){
        s = m+1;  // key is greater go to right
    }else {
        e = m-1;  // key is smaller go to left
    }
}
if(found==false){
    console.log("key is not present in the given array");
    
}