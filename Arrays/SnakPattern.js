let mat =[[1,2,3],
          [4,5,6],
          [7,8,9]];

          // function for index is even
let n = mat.length;
// let m = mat.length;
let ans =[];
function snackPattern(){
for(let i=0; i<n; i++){
    if(i %2 ==0){
        for(let j=0; j<n; j++)
            // console.log(mat[i][j]);   
            ans.push(mat[i][j]) ;  
    }else{
        for(let j=n-1; j>= 0; j--)
            // console.log(mat[i][j]);  
            ans.push(mat[i][j]);  
    }
}
return ans;
}
console.log(snackPattern(ans));


