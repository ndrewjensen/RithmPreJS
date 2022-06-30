
function swap(items, ind1, ind2) {
  let temp = items[ind1];
  items[ind1]= items[ind2];
  items[ind2] = temp;
  return items;
}
