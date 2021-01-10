function add0(m) {
  return m < 10 ? `0${m}` : m;
}
function formatDate(needTime) {
  // needTime是整数，否则要parseInt转换
  const time = new Date(needTime);
  const y = time.getFullYear();
  const m = time.getMonth() + 1;
  const d = time.getDate();
  const h = time.getHours();
  const mm = time.getMinutes();
  const s = time.getSeconds();
  return `${add0(m)}-${add0(d)} ${add0(h)}:${add0(mm)}`;
  //  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}

module.exports = formatDate;
