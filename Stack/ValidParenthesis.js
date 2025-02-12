function validParenthesis(s){
    stack = [];
    for(i=0; i<s.length; i++){
        if(s[i] == '(')
            stack.push(s[i]);
        else{
            if(stack.length == 0)
                return false;
            stack.pop();
        }
    }
    if(stack.length ==0 )
        return true;
    else
        return false;
}
console.log(validParenthesis("(())")); // true
console.log(validParenthesis("(()("));  // false
console.log(validParenthesis("(()))"));  //false
console.log(validParenthesis("))(("));  // false
console.log(validParenthesis("(())()()"));  // true
