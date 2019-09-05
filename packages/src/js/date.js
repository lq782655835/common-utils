/**
 * 通用格式转换
 * @param {*} formater 格式模板
 * @param {*} t 支持number和date，默认是当前时间
 * expample: dateFormater('YYYY-MM-DD hh:mm:ss')
 */
export function dateFormater(formater, t) {
  let date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + "",
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formater
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? "0" : "") + M)
    .replace(/DD|dd/g, (D < 10 ? "0" : "") + D)
    .replace(/HH|hh/g, (H < 10 ? "0" : "") + H)
    .replace(/mm/g, (m < 10 ? "0" : "") + m)
    .replace(/ss/g, (s < 10 ? "0" : "") + s);
}

/**
 * 日期展示
 * @param {*} val
 */
export function timeView(val) {
  const now = +new Date(); // 当时时间
  const timeStamp = +new Date(val); // 需要处理的时间
  const result = now - timeStamp; // 相差的时间戳
  const min = 60 * 1000; // 分钟的毫秒数
  const hour = 60 * 60 * 1000; // 小时的毫秒数
  const day = 60 * 60 * 1000 * 24; // 日的毫秒数
  if (result / min < 1) {
    return "刚刚发布";
  } else if (result / min < 60) {
    return Math.floor(result / min) + "分钟前";
  } else if (result / hour > 1 && result / hour < 24) {
    return Math.floor(result / hour) + "小时前";
  } else if (result / day > 1 && result / day < 7) {
    return Math.floor(result / day) + "天前";
  } else if (
    dateFormater('YYYY', now) === dateFormater(timeStamp, 'YYYY')
  ) {
    return dateFormater("MM月DD日", timeStamp);
  } else {
    return dateFormater("YYYY年MM月DD日", timeStamp);
  }
}
