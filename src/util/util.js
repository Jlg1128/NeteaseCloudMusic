export const parseLRC = lrc => {
  var lrcObj = {};
  var regExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/g;
  while (1) {
    // 得到匹配格式的歌词
    var result = regExp.exec(lrc);
    // 参考结果解析匹配歌词
    if (result) {
      // 判断如果获取到匹配结果 通过time变量接收此句歌词的时间(秒)
      var time = parseInt(result[1]) * 60 + parseInt(result[2]);
      // 通过对象属性:把每个解析到的时间匹配此时的歌词,格式obj{key:value}
      lrcObj[time] = result[4];
    } else {
      // 如果不满足直接跳出
      break;
    }
  }
  let lrcArr = Object.values(lrcObj);
  return lrcArr;
};

export function arrayExchange(array) {
  let obj = {};
  array.map(item => {
    var key = Object.keys(item);
    var values = Object.values(item);
    values.map(item => (obj[key] = item));
  });
  return obj;
}
