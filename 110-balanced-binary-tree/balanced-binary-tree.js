/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(node)
    {
        if(!node) return 0;

        let leftHeight = height(node.left);
        if(leftHeight === -1) return -1;

        let rightHeight = height(node.right);
        if(rightHeight === -1) return -1;

        if(Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) +1;
    }
    return height(root) !== -1;
};