/*!
 * common-utils.js v0.0.1
 * (c) 2019-2019 Russell
 * https://github.com/lq782655835/common-utils
 * Released under the MIT License.
 */
/**
 * B to KB/MB...
 * @param {*} bytes
 */
const bytesToSize = bytes => {
  if (bytes === 0) return "0 B";
  var k = 1024;
  var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
};

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
function numberFormatter(num, digits) {
  const si = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" }
  ];
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (
        (num / si[i].value + 0.1)
          .toFixed(digits)
          .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol
      );
    }
  }
  return num.toString();
}

/**
 * 通用格式转换
 * @param {*} formater
 * @param {*} t
 * expample: dateFormater('YYYY-MM-DD hh:mm:ss')
 */
function dateFormater(formater, t) {
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
function timeView(val) {
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
    this.switchTime(now, "YYYY") === this.switchTime(timeStamp, "YYYY")
  ) {
    return this.switchTime(timeStamp, "MM月DD日");
  } else {
    return this.switchTime(timeStamp, "YYYY年MM月DD日");
  }
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  }

  /**
   * @param {string} url
   * @returns {Boolean}
   */
  function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url)
  }
  
  /**
   * @param {string} email
   * @returns {Boolean}
   */
  function validEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email)
  }

/**
 * 横线转驼峰命名
 * @param {*} str
 * example: camelize('ab-cd-ef') // abCdEf
 */
const camelize = str => {
  let camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function($0, $1) {
    return $1 ? $1.toUpperCase() : "";
  });
};

/**
 * 驼峰转横线命名
 * @param {*} str
 * example: hyphenate('abCdEf') // ab-cd-ef
 */
function hyphenate(str) {
  let hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, "-$1").toLowerCase();
}

/**
 * Upper case first char
 * @param {String} string
 */
function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
const isObject = value => {
  let type = typeof value;
  return value != null && (type == "object" || type == "function");
};

/**
 * 判断数据是不是Object类型的数据
 */
const isPlainObject = obj => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 获取url query参数值
 * @param {*} name 参数
 * example: getQueryParam('a'); // returns '1' on page http://domain.com/page.html?a=1&b=2
 */
const getQueryValueByName = name => {
  let q = window.location.search.match(new RegExp("[?&]" + name + "=([^&#]*)"));
  return q && q[1];
};

/**
 * 获取所有参数。
 * 利用replace的正则以及处理函数，一行解决
 * example ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}
 */
const getQueryParam = () => {
  let q = {};
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
  return q;
};

/**
 * 通用文件下载
 * @param {*} url
 * @param {*} params
 * @param {*} isImage
 * expample: download('http://dl.netease.com/template.docs', {id: '898897'})
 */
const download = (url, params, isImage = true) => {
  if (!url) {
    throw new Error("url not allow empty");
  }

  if (params) {
    url += "?";
    Object.keys(params).forEach(param => {
      if (params.hasOwnProperty(param)) {
        if (Array.isArray(params[param])) {
          params[param].forEach(el => {
            url += `${param}[]=${el}&`;
          });
        } else if (params[param] !== undefined) {
          url += `${param}=${params[param]}&`;
        }
      }
    });
  }

  if (isImage) {
    let [, filename] = /\/(.*?)(\?|$)/g.exec(url);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || true;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    window.open(url);
  }
};

/**
 * 浏览器复制
 * @param {*} value 要复制的值
 */
const copyData = value => {
  const inputDom = document.createElement("input");
  inputDom.value = value;
  document.body.appendChild(inputDom);
  inputDom.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  document.body.removeChild(inputDom); // 删除DOM
};

export { bytesToSize, camelize, copyData, dateFormater, download, getQueryParam, getQueryValueByName, hyphenate, isArray, isExternal, isObject, isPlainObject, numberFormatter, timeView, uppercaseFirst, validEmail, validURL };
//# sourceMappingURL=common-utils.es.js.map
