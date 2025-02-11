let mat = [[1,0,0],
           [0,1,0],
           [0,0,1]];

function checkIdentityMat(mat){
   let r = mat.length;
   let c = mat[0].length;
   if(r != c){
    return false;
   }
   for(i=0; i<r; i++){
    for(j=0; j<c; j++){
        //id diagonal element is not equal to 1 then return false
        if(i==j && mat[i][j] !=1){
            return false;
        }
        if(i!=j && mat[i][j] != 0){
            return false;
        }

    }
   }
   return true;
}

console.log(checkIdentityMat(mat));
