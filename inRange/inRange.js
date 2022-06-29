
function inRange(n, start, end) {

  if (isNaN(end)) {
    end = start;
    start = 0;
  }

  if (start > end) {
    let start2 = end;
    end = start;
    start = start2;
  }

  return (start <= n && n < end)


}
