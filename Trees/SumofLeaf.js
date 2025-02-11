// Question - https://www.geeksforgeeks.org/problems/sum-of-leaf-nodes/0
class Solution {
    leafSum(root) {
        if(root == null)
        return 0;
        if(root.left == null && root.right == null)
        return root.data;
    return this.leafSum(root.left) + this.leafSum(root.right)    
    }
}