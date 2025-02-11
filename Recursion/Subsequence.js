function subsequence(s,i,curr) {
    if(i == s.length){
        console.log(curr);
        return;
    }
    subsequence(s, i+1, curr+s[i])   //take b
    subsequence(s, i+1, curr)       //leave b

}
s = "abc";
subsequence(s,0,"");
