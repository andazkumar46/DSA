let chocolates = [4,2,5,6,1,3,7,3];
chocolates.sort();
chocolates.reverse()
// console.log(chocolates);
let total = 0;
for(i=0; i<=2; i++){
total = total + chocolates[i];
}
console.log(`total chocolates eat by badmass Bablu = ${total}`); // 18
