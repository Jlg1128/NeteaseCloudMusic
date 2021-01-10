function add0(m) {
  return m < 10 ? '0' + m : m;
}
function formatDate(needTime) {
  //needTime是整数，否则要parseInt转换
  var time = new Date(needTime);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm);
  //  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}

module.exports = formatDate;
