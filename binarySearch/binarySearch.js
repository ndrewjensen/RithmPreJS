
function binarySearch(arr, val) {
  let med = Math.floor(arr.length/2);
  if (val === arr[med]) {
    return val;
  } else if (val < arr[med]) {
    for (let i = 0; i < med; i++ ) {
      if (val === arr[i]) {
        return i;
      }
    }
  } else {
    for (let i = med; i < arr.length; i++ ) {
      if (val === arr[i]) {
        return i;
      }
    }
  }
  return -1;
}




