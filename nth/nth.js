
function nth(items, idx) {
  if (idx < 0) {
    return items[items.length+idx];
  }
  return items[idx]
}
