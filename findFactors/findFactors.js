
function findFactors(num) {
  let arr = [1];
  for (let i = 2; i < num +1; i++) {
    if (num%i===0) {
      arr.push(i);
    }
  }
  return arr;
}