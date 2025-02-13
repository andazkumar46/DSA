// Question -> Find the sort Element of the given Array.
let arr=[1,2,4,3];
// arr.push(6);
// console.log(arr);
let n = arr.length; // 4
// console.log(n);
for(let i=0; i<n-1; i++){
    // console.log(arr[i]);
    for(let j=0; j<n-i-1; j++){
        if(arr[j]>arr[j+1]){  // if ew need to print in accending oreder the arr[j]<arr[j+1]
            //swap
            temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }        
    }    
}
console.log(arr);

