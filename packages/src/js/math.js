// 数组中最大值
export function max(arr) {
  arr = arr.filter(item => !_isNaN(item));
  return arr.length ? Math.max.apply(null, arr) : undefined;
}

// 数组中最小值
export function min(arr) {
  arr = arr.filter(item => !_isNaN(item));
  return arr.length ? Math.min.apply(null, arr) : undefined;
}

// 随机数
export function random(lower, upper) {
  lower = +lower || 0;
  upper = +upper || 0;
  return Math.random() * (upper - lower) + lower;
}

function _isNaN(v) {
  return !(typeof v === "string" || typeof v === "number") || isNaN(v);
}
