function arrayOfProducts(array) {
  const leftSum = [];
  leftSum[0] = 1;
  for (let i = 1; i < array.length; i++) {
    leftSum[i] = leftSum[i - 1] * array[i - 1];
  }

  const rightSum = [];
  rightSum[0] = 1;
  for (let i = array.length - 1, j = 1; i > 0; i--, j++) {
    rightSum[j] = rightSum[j - 1] * array[i];
  }

  let left = 0;
  let right = array.length - 1;
  while (left != array.length) {
    array[left] = leftSum[left] * rightSum[right];
    left++;
    right--;
  }

  return array;
}

// O(N) ST

function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);

  let leftRunningSum = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] *= leftRunningSum;
    leftRunningSum *= array[i];
  }

  console.log(products);

  let rightRunningSum = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rightRunningSum;
    rightRunningSum *= array[i];
  }
  return products;
}
// O(N) ST
