
function omit(obj, keys) {
  for (let key of keys) {
    if (key in obj) {
      delete obj[key];
    }
  }
  return obj;
}
