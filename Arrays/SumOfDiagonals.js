let mat = [[2,2,3],
           [4,5,6],
           [7,8,9]];

let r = mat.length;
let c = mat[0].length; 
let sumofD1 = 0;
// let sumofD2 = 0;
for(i=0; i<r; i++){
    let sum1 = 0;
    // let sum2 = 0;

    for(j=0; j<r; j++){
        if(i == j || i + j == r-1){
            sum1 = sum1 + mat[i][j];
        }
        // if(i + j == r-1){
        //     sum2 = sum2 + mat[i][j];
        // }
    }
    sumofD1 = sumofD1 +sum1;
    // sumofD2 = sumofD2 +sum2;
}
console.log(sumofD1);

// if(sumofD1 == sumofD2){
//     console.log("Diagonal 1 and Diagonal 2 Both are Equal");
    
// }else if(sumofD1 > sumofD2){
//     console.log("Diagonal 1 is Greater than  Diagonal 2");

// }else{ 
//     console.log("Diagonal 1 is lesser than Diagonal 2");

// }


