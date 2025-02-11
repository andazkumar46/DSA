let arr =[2,5,7,8,4]; Target = 13
// console.log(arr.length); // 5
// console.log(arr[0]); //  2
// console.log(arr[1] + arr[2]); //  12

let n =arr.length;
for(let i=0; i<n; i++){
    for(let j=0; j<n-1; j++){
        if(arr[j]+arr[j+1]){
            console.log(arr[j],arr[j+1]);
            
        }
    }
}


