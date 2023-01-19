function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const mergedInterviews = [[array[0][0], array[0][1]]];

  for (let i = 1; i < array.length; i++) {
    const indexOfLastMergedInterview = mergedInterviews.length - 1;
    const [prevStart, prevEnd] = mergedInterviews[indexOfLastMergedInterview];
    const [start, end] = array[i];

    if (prevEnd >= start) {
      mergedInterviews[indexOfLastMergedInterview] = [
        Math.min(prevStart, start),
        Math.max(prevEnd, end),
      ];
      continue;
    }

    mergedInterviews.push([start, end]);
  }

  return mergedInterviews;
}
// O(NlogN) Time, O(N) Space
