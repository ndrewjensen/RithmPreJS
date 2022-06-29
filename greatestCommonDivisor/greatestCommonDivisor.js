
function greatestCommonDivisor(num1, num2) {
  if (num1===0 || num2===0) {
    return 0;
  }
  let gcd = 1;
  let lesser;
  if (num1<num2) {
    lesser = num1;
  } else {
    lesser = num1;
  }

  for (let i=1;i <= lesser; i++) {
    if (num1%i===0 && num2%i===0) {
      gcd = i;
    }
  }
  return gcd;
}


