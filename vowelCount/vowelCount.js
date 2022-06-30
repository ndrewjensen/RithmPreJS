
function vowelCount(phrase) {
  let obj = {};
  let str = phrase.toLowerCase();
  let arr = ['a','e','i','o','u']
  let count = [0,0,0,0,0]

  //count vowels in the str
  for (let i = 0; i < str.length; i++) {
    let ind = arr.indexOf(str[i])
    if(ind !==-1) {
      count[ind] += 1;
    }
  }

  //populate the object
  for (let i = 0; i < 5; i++) {
    if (count[i]>0) {
      obj[arr[i]] = count[i];
    }
  }
  return obj;

}
