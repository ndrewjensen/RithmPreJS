
function extractFullName(arr) {
  let newArr = [];
  for (people of arr) {
    newArr.push(people.first + " " + people.last)
  }
  return newArr;
}
