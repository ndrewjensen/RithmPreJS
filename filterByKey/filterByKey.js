
function filterByKey(arr, key) {
  let newArr = arr.filter(obj => 'isCatOwner' in obj)
  return newArr;
}
