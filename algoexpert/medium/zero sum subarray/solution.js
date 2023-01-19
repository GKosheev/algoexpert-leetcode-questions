function zeroSumSubarray(nums) {
  if (nums.length === 1) {
    return nums[0] === 0;
  }

  if (nums.length === 2) {
    return nums[0] + nums[1] === 0;
  }

  const answer = [];
  const memo = {};

  let currentSum = nums[0];
  memo[currentSum] = true;
  for (let i = 1; i < nums.length; i++) {
    currentSum += nums[i];
    if (memo[currentSum]) {
      return true;
    } else {
      memo[currentSum] = true;
    }
    console.log(memo);
  }
  return false;
}
// O(N) ST
