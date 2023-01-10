class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const result = [];

  recursiveSum(root, 0, result);
  return result;
  // Write your code here.
}

function recursiveSum(root, sum = 0, result) {
  if (!root.left && !root.right) {
    result.push(sum + root.value);
    return;
  }

  if (root.left) {
    recursiveSum(root.left, sum + root.value, result);
  }
  if (root.right) {
    recursiveSum(root.right, sum + root.value, result);
  }
}

// O(N) ST
