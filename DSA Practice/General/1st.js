// Question -> Find the no. of pushups in 3 sets and each set 10 pushups.
let TotalPushup = 0;
for(let i=1; i<=3; i++){  // this loop is define for the sets.
    console.log("Set",i);    // to print the sets.
    for(let j=1; j<=10; j++){  // this is for the pushups.
        TotalPushup += 1;   // to add the count of pushups.
        console.log("Pushup",j);  // to print the pushups.
    }
}
console.log("Total Pushup Done in 3 Sets :",TotalPushup);

