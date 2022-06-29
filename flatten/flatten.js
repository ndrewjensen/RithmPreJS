
function flatten(items) {

  let arr = [];
  for (let i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {
      let tempArr = items[i];
      for (let elem of tempArr) {
        arr.push(elem);
      }
    } else {
      arr.push(items[i]);
    }
  }
  return arr;
}
