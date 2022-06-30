
function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) {
    return NaN;
  }
  let s11 = s1.toLowerCase();
  let s22 = s2.toLowerCase();
  let count = 0;
  for (let i = 0; i<s11.length; i++) {
    s11[i] !== s22[i] ? count ++: count ;
  }
  return count;
}
