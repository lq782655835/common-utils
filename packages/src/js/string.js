/**
 * 横线转驼峰命名
 * @param {*} str
 * example: camelize('ab-cd-ef') // abCdEf
 */
export function camelize(str) {
  let camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function($0, $1) {
    return $1 ? $1.toUpperCase() : "";
  });
}

/**
 * 驼峰转横线命名
 * @param {*} str
 * example: hyphenate('abCdEf') // ab-cd-ef
 */
export function hyphenate(str) {
  let hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, "-$1").toLowerCase();
}

/**
 * 首字母大写
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
