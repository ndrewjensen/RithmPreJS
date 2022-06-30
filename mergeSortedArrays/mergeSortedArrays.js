
function mergeSortedArrays(a,b) {
  let arr = [];
  arrLength = a.length + b.length; //this will ignore all of the extra elements that will be placed at the ends of the arrays


  //find a number bigger than the biggest number in a or b
  a[a.length-1] >= b[b.length-1] ? maxNum = a[a.length-1] +1 :
    maxNum = b[b.length-1] +1;

  //find how much longer the shorter array needs to be
  let lengthen = Math.abs(b.length - a.length)

  //lengthen the shorter array length of longer by adding the biggestvalue+1 repeatedly to its end, and make the longer array one element longer
  if (a.length < b.length) {
    for (let i = 0; i < lengthen +1; i++) {
      a.push(maxNum);
    }
    b.push(maxNum);
  } else if (b.length < a.length) {
    for (let i = 0; i < lengthen+1; i++) {
      b.push(maxNum);
    }
    a.push(maxNum)
  }

//compare the value from the beginning of each array, push the lesser into the result array, delete that number from a or b.
  for (let i = 0; i< (arrLength); i++) {
    if (a[0] <= b[0]) {
      arr.push(a[0]);
      a.shift();
    } else {
      arr.push(b[0]);
      b.shift();
    }
  }
  return arr;
}
