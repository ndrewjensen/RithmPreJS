
function aperture(n,items) {
  if (n < 1 || n > items.length) {
    return [];
  }

  let arr = [];
  for (let i=0; i<=items.length-n; i++) {
    arr.push(items.slice(i,i+n))
  }
  return arr;
}
