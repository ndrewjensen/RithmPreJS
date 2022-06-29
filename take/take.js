
function take(items, count) {

  count > items.length? count = items.length:
  isNaN(count)? count = 1: count;
  return items.slice(0,count);


}

//if I'm not allowed to use .slice, then this:

/*function take(items, count) {

  count > items.length? count = items.length:
  isNaN(count)? count = 1: count;
  let items2 = [];
  for (let i=0; i<count; i++) {
    items2.push(items[i]);
  }
  return items2

}*/