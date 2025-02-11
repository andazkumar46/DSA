// 1D Array
// let oneDArray = [1,2,3,4,5,6];

//2D Array
//1 2 3 
//4 5 6 
// let twoDArray = [[1,2,3],[4,5,6]];
// console.log(twoDArray);

// creating an empty 2D Array
// const rows = 3;
// const cols = 3;
// const array = new Arrays(rows);
// console.log(array); 
// for(i=0; i<rows; i++){
//     arr[i] = new Arrays(cols)
// }
// console.log(array);


// Accessing elements of 2D Array
let mat = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12]];

            // print 6
            // console.log(mat[1][1]);
// print 12    
// print all rows        
// console.log(mat[2][3]);
// for (i=0; i<3; i++){
//     console.log("row",i);
    
//     for(j=0; j<4; j++){
//         console.log(mat[i][j]);
        
//     }
// }


// how to print all cols 
for(i=0; i<4; i++){
    console.log("colum",i);
    for(j=0; j<3; j++){
        console.log(mat[j][i]);
        
    }
     
}