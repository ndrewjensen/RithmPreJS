
function pick(obj,keys) {

  const newObj = {};
  for (key of keys) {
    if (obj[key]) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}
