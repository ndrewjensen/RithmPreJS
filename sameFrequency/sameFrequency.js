
function sameFrequency(num1, num2) {
  // Add any parameters you need. Good luck!
  let tally = [0,0,0,0];
  //tally is [1s in num1, 2s in num1, 1s in num2, 2s in num2]

  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');

  for (let i=0; i < arr1.length; i++) {
    arr1[i] == 1? tally[0] ++ : tally[1] ++;
  }

  for (let i=0; i < arr2.length; i++) {
    arr2[i] == 1? tally[2] ++ : tally[3] ++;
  }

  return ((tally[0] === tally[2]) && (tally[1] === tally[3]))
}
