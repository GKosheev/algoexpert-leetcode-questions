function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let prevSum = queries[0];
  let totalSum = 0;

  for (let i = 1; i < queries.length; i++) {
    totalSum += prevSum;
    prevSum += queries[i];
  }

  return totalSum;
}

//O(1) Space, O(nlogn) Time
