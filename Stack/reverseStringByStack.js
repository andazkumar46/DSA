let st = "Hello";
let stack = [];
for(let i=0; i<st.length; i++) {
    stack.push(st[i]);
}
// console.log(stack);

let reverse = "";
while(stack.length>0){
    let popped = stack.pop();
    reverse += popped;
}
console.log(reverse);

