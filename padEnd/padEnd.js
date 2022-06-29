
function padEnd(phrase, minLength, pad) {

  if (minLength - phrase.length <=0) {
    return phrase;
  }

  if (!pad) {
    console.log(phrase + minLength + pad + "we're in the no pad")
    pad = ' ';
  }

  while(minLength - phrase.length > 0) {
    phrase = phrase + pad;
    console.log(phrase);
  }

  if (minLength - phrase.length < 0) {
    return phrase.slice(0,minLength)
  }

  return phrase
}