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
export const isObject = value => {
  let type = typeof value;
  return value != null && (type == "object" || type == "function");
};

/**
 * 判断数据是不是Object类型的数据
 */
export const isPlainObject = obj => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}
