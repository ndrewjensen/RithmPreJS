
function twoArrayDifference(arr1, arr2) {
  let diffArr = [];
  for (item of arr1) {
    if (arr2.indexOf(item)===-1){
      diffArr.push(item);
    }
  }
  return diffArr;
}
