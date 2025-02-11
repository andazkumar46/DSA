//given an array money counting bank balance of diffrent bank account of Bablu , calculate the totatal money bablu has
// let money = [400,250,150,100]

let money = [400,250,150,100];
let n = money.length;
let sum=0;

for(i=0; i<n; i++){
    sum = sum + money[i];
}
console.log(sum) ;
