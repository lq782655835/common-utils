/**
 * 浏览器复制
 * @param {*} value 要复制的值
 */
export function copyData(value) {
  const inputDom = document.createElement("input");
  inputDom.value = value;
  document.body.appendChild(inputDom);
  inputDom.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  document.body.removeChild(inputDom); // 删除DOM
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

// 展平
export function flatDeep(arr) {
  return arr.reduce(
    (pre, val) => pre.concat(Array.isArray(val) ? flatDeep(val) : val),
    []
  );
}

// 防抖
export function debounce(fn, wait) {
  let tId;
  return function() {
    let that = this;
    let args = arguments;
    tId && clearTimeout(tId);
    tId = setTimeout(function() {
      fn.apply(that, args);
    }, wait);
  };
}
