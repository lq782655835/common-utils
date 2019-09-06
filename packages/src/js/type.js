/**
 * 知识点：
 * // js基本类型
 * 值类型：null/undefined/string/boolean/number/symbol
 * 引用类型：object（细分的话有：Object/Function/Array/Date/RegExp等）
 * // typeof(没有null): object/function/undefined/string/boolean/number
 * typeof null === 'object'
 * typeof undefined === 'undefined'
 * typeof window.console.log === 'function'
 * // toString() 返回 "[object type]"，其中type是对象的类型
 * Object.prototype.toString.call(null)==='[object Null]'
 * Object.prototype.toString.call(undefined)==='[object Undefined]'
 * Object.prototype.toString.call(window.console.log)==='[object Function]'
 * // instanceOf是根据原型链判断
 * window.console.log instanceOf Function // true
 * window.console.log instanceOf Object // true
 */

/**
 * 判断数据是不是引用类型的数据
 * (例如： arrays, functions, objects, regexes, new Number(0),以及 new String(''))
 */
export function isObject(value) {
  let type = typeof value;
  return value != null && (type == "object" || type == "function");
}

/**
 * 判断数据是不是Object类型的数据
 */
export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

/**
 * 是否是数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  Array.isArray =
    Array.isArray || Object.prototype.toString.call(arg) === "[object Array]";
  return Array.isArray(arg);
}

// 获取数据类型，返回结果为 Number、String、Object、Array等
export function getRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

// 判断数据是不是时间对象
export function isDate(value) {
  return Object.prototype.toString.call(value) === "[object Date]";
}

// 判断数据是不是正则对象
export function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}

// 判断数据是不是函数
export function isFunction(value) {
  return Object.prototype.toString.call(value) === "[object Function]";
}
