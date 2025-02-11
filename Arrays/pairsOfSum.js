// let arr = [1,2,4,3,6,8];
// method 1

// let target = 15;
// let n = arr.length;
// let found = false;
// for(i=0; i<n; i++){
//     let sum = target -arr[i];
//     for(j=i+1; j<n; j++){
//         if(arr[j] == sum){
//             found = true;
//         console.log("true");
//         break;        
//         }
//     }
// }
// if(found == false){
//     console.log("not found");    
// }

let arr = [1,2,4,3,6,8];

// method 2
let n = arr.length;
let X = 7;
let L =0; ///start index
let R =n-1; // last index
let found = false;
while(L<R){
    let sum = arr[L] + arr[R]
    if(sum == X){
        found = true;
       console.log("True");
        break;
    } else if(sum < X){
        L++;
    } else R--;
}
if(found == false){
    console.log("False");
    
}





