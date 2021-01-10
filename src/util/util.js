/* eslint-disable radix */
/* eslint-disable no-return-assign */
export const parseLRC = lrc => {
  const lrcObj = {};
  const regExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/g;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // 得到匹配格式的歌词
    const result = regExp.exec(lrc);
    // 参考结果解析匹配歌词
    if (result) {
      // 判断如果获取到匹配结果 通过time变量接收此句歌词的时间(秒)
      const time = parseInt(result[1]) * 60 + parseInt(result[2]);
      // 通过对象属性:把每个解析到的时间匹配此时的歌词,格式obj{key:value}
      // eslint-disable-next-line prefer-destructuring
      lrcObj[time] = result[4];
    } else {
      // 如果不满足直接跳出
      break;
    }
  }
  const lrcArr = Object.values(lrcObj);
  return lrcArr;
};

export function arrayExchange(array) {
  const obj = {};
  array.map(item => {
    const key = Object.keys(item);
    const values = Object.values(item);
    values.map(value => (obj[key] = value));
  });
  return obj;
}

export function deepClone(obj) {
  const newobj = JSON.stringify(obj);
  const currentObj = JSON.parse(newobj);
  return currentObj;
}
