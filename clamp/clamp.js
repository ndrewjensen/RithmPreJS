
function clamp(val, lb, ub) {
 if (val > lb && val < ub) {
  return val;
 } else if (val < lb) {
  return lb;
 } else {
  return ub;
 }

}
