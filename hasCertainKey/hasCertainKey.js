
function hasCertainKey(arr, key) {
  for (obj of arr) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
}
