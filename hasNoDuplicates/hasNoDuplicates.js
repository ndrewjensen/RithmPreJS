
function hasNoDuplicates(arr) {
  for (let i = 0; i<arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) !== i) {
      return false;
    }
  }
  return true;
}
