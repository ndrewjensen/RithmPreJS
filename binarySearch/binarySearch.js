
function binarySearch(arr, val) {
  if (val < arr[0] || val > arr[arr.length]) {
    return -1;
  }

  let med = Math.floor(arr.length/2);
    while (arr[med]!= val) {
      console.log(med);
      val > arr[med] ? arr.splice(0,med) :
      arr.splice(med);
      console.log(arr);
      med = Math.floor(arr.length/2);
      console.log(med);
    }



    return med;
}
