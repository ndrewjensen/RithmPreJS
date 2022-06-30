
function validAnagram(w1,w2) {
  let obj1 = {};
  let obj2= {};

  for (letter of w1) {
    !(letter in obj1) ? obj1[letter] = 1 : obj1[letter] ++;
  }

  for (letter of w2) {
    !(letter in obj2) ? obj2[letter] = 1 : obj2[letter] ++;
  }

  for (key in obj1) {
    if (obj1[key] !== obj2[key]){
      return false;
    }
  }
  return true;
}
