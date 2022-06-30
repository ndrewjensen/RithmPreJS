
function keyCount(arr) {
  let obj = {};
  for (let ele of arr) {
    for (key in ele) {
      if (!(key in obj)) {
        obj[key] = 1;
      } else {
        obj[key] ++;
      }
    }
  }
  return obj;
}
