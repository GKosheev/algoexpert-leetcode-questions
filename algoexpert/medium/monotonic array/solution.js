function isMonotonic(array) {
  if (array.length === 1 || array.length === 2) {
    return true;
  }

  let i = 1;
  let type = undefined;
  while (i < array.length) {
    const prev = array[i - 1];
    const cur = array[i];

    if (prev === cur) {
      i++;
      continue;
    }

    if (typeof type === "undefined") {
      if (prev > cur) {
        type = "decr";
      } else if (prev < cur) {
        type = "incr";
      }
    } else {
      if (cur > prev && type === "decr") {
        return false;
      }

      if (cur < prev && type === "incr") {
        return false;
      }
    }
    i++;
  }
  return true;
}
