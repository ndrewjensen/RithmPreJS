
function hasAZero(num) {
  let arr = num.toString().split("");
  return arr.some(dig => dig === '0');
}
