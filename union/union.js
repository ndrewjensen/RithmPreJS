
function union() {
  let arr = [];
  for (arg of arguments) {
    for (item of arg) {
      if (arr.indexOf(item)===-1) {
        arr.push(item);
      }
    }
  }
  return arr;
}
