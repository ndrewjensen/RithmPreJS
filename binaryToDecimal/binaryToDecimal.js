
function binaryToDecimal(num) {
  let dec= 0;
  for (let i = 0; i<num.length; i++) {
    dec += (num[i]*(2**(num.length-1-i)))
  }
  return dec;
}


