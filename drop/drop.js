
function drop(items, numDrop) {

  let newItems = items;

  if (isNaN(numDrop)) {
    return newItems.slice(1);
  }

  if (numDrop > newItems.length) {
    newItems = [];
    return newItems;
  }

  return newItems.slice(numDrop)
}
