function getToday() {
  console.log(Date());
  return new Date();

}

function isWeekend(date) {
  let day = date.getDay();
  return day === 0 || day === 6 ? true : false;
}

function getMonthName(date) {
  monthNum = date.getMonth();
  let monthNames = ['January', 'February','March','April', 'May', 'June','July','August','September','October','November','December'];
  return monthNames[monthNum];

}
