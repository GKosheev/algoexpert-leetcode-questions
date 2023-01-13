function threeNumberSum(array, targetSum) {
  // return solution1(array, targetSum)
  // return solution2(array, targetSum)
  return solution3(array, targetSum);
}

// O(N^3) Time, O(N)
function solution1(array, targetSum) {
  const triplets = [];

  array.sort((a, b) => a - b);

  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        const first = array[i];
        const second = array[j];
        const third = array[k];

        if (first + second + third === targetSum) {
          triplets.push([first, second, third]);
        }
      }
    }
  }
  return triplets;
}

// O(N + k) Space, O(N^2) Time
function solution2(array, targetSum) {
  array.sort((a, b) => a - b);

  const memo = {};
  const triplets = [];

  for (let i = 0; i < array.length; i++) {
    memo[array[i]] = i;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const desiredNumber = targetSum - (array[i] + array[j]);

      const possibleIndex = memo[desiredNumber];

      // that means that the number is stored further and we're not looking for the same number
      if (typeof possibleIndex === "number" && possibleIndex > j) {
        triplets.push([array[i], array[j], desiredNumber]);
      }
    }
  }
  return triplets;
}

// O(N) Space, O(N^2) Time
function solution3(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const first = array[i];
      const second = array[left];
      const third = array[right];

      const potentialTriplet = first + second + third;

      console.log(first, second, third, potentialTriplet);

      if (potentialTriplet < targetSum) {
        left++;
      } else if (potentialTriplet > targetSum) {
        right--;
      } else {
        left++;
        right--;
        triplets.push([first, second, third]);
      }
    }
  }
  return triplets;
}
