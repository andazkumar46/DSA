function generateSubsets(arr, i, curr, powerSets){
    if(i == arr.length){
        powerSets.push([...curr]);
        return
    }
    generateSubsets(arr, i+1, curr, powerSets);  // leave
    curr.push(arr[i]);
    generateSubsets(arr, i+1, curr, powerSets);  // take
    curr.pop();  // backtracking

}

let arr = [1,2,3];
let powerSets = [];
generateSubsets(arr, 0, [], powerSets);
console.log(powerSets);