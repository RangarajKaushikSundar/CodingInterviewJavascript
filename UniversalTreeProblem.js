class BinaryTreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new BinaryTreeNode(1, null, null);

root.left = new BinaryTreeNode(1, null, null);
root.right = new BinaryTreeNode(1, null, null);

root.left.left = new BinaryTreeNode(1, null, null);
root.left.right = new BinaryTreeNode(3, null, null);

root.right.left = new BinaryTreeNode(2, null, null);
root.right.right = new BinaryTreeNode(1, null, null);


console.log(root);

let nonUniversalTrees = 0;

function dfs(root) {
  if(root === null) {
    return;
  }
  if(!isUniversalSubTree(root)) {
    nonUniversalTrees++;
  }
  console.log(root.value);
  dfs(root.left);
  dfs(root.right);
}

function isUniversalSubTree(treeNode) {
  if(Boolean(treeNode) === false ||
      Boolean(treeNode.left) === false ||
      Boolean(treeNode.right) === false) {
    return false;
  }
  if(treeNode.value === treeNode.right.value 
    && treeNode.value === treeNode.left.value) {
      return true;
  }
  return false;
}

dfs(root);
console.log("No Universal Subtrees " + nonUniversalTrees);
