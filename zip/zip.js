
function zip() {

  let mat = arguments;
  let newMat = [];
  let c =  mat[0].length;
  let r = mat.length;

  //create empty new matrix
  for (let i = 0; i < c; i++) {
    newMat[i] = new Array(r);
  }

  //populate new matrix
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      newMat[i][j] = mat[j][i];
    }
  }
  return newMat;
}
