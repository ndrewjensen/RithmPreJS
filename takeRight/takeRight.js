
function takeRight(items, n) {

  console.log(n);
  let newItems = [];

  n===0 ? newItems = []:
  isNaN(n) ? newItems[0] = items[items.length-1] :
  n > items.length ? newItems = items :
  newItems = items.slice(items.indexOf(n));
  return newItems;
}