
function createMatrix(R, C) {
  console.log(R + "&" + C)
  let rowArr = [];
  let arr = []
  for (let i=0; i<R; i++) {
    rowArr.push(0);
  }
  for (let i=0; i<C; i++) {
    arr.push(rowArr);
  }
  return arr;
}
