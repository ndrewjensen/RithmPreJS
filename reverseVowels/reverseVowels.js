
function reverseVowels(str) {
  let arr = str.split('')
  let list = ['a','e','i','o','u','A','E','I','O','U'];
  let vowels = [];
  let ind = []
  for (let i=0; i<arr.length; i++) {
    if (list.indexOf(arr[i])!==-1) {
      ind.push(i);
      vowels.push(str[i]);
    }
  }
  vowels.reverse();
  for (let i = 0; i<ind.length; i++) {
    arr[ind[i]] = vowels[i];
  }
  return str2 = arr.join('')
}

