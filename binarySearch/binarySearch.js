
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((right + left)/2);
    if (arr[middle] === val) {
      return middle;
    } else if (val < arr[middle]){
      right = middle -1;
    } else {
      left = middle + 1;
    }

    }
    return -1;
  }




