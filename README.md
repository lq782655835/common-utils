# common-utils [![](https://badgen.net/vs-marketplace/v/springleo.common-utils)](https://marketplace.visualstudio.com/items?itemName=springleo.common-utils) [![](https://badgen.net/vs-marketplace/i/springleo.common-utils)](https://marketplace.visualstudio.com/items?itemName=springleo.common-utils) ![](https://img.shields.io/badge/license-MIT-F44336.svg)
常用工具函数，支持vscode扩展插件

## :rocket:图形界面

https://lq782655835.github.io/common-utils/example/

## npm插件

First install the package via npm:

    npm install ai-common-utils

To use the package in your module:

    import { bytesToSize } from 'ai-common-utils'

## vscode插件
1. 安装vscode中插件搜索框输入**common-utils**
2. 安装完毕后按**F1**(或者ctrl+shift+p).
3. 输入"**zz**"可以看到工具列表.
4. 或者**输入关键词**, 比如"bytesToSize".

![预览动画加载中...]('./vscode-animation.gif)

## 工具函数

### bytesToSize
```javascript
function bytesToSize(bytes) {
  if (bytes === 0) return "0 B";
  var k = 1024;
  var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
}
```

### camelize
```javascript
function camelize(str) {
  var camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function ($0, $1) {
    return $1 ? $1.toUpperCase() : "";
  });
}
```

### copyData
```javascript
function copyData(value) {
  var inputDom = document.createElement("input");
  inputDom.value = value;
  document.body.appendChild(inputDom);
  inputDom.select(); // 选择对象

  document.execCommand("Copy"); // 执行浏览器复制命令

  document.body.removeChild(inputDom); // 删除DOM
}
```

### dateFormater
```javascript
function dateFormater(formater, t) {
  var date = t ? new Date(t) : new Date(),
      Y = date.getFullYear() + "",
      M = date.getMonth() + 1,
      D = date.getDate(),
      H = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
  return formater.replace(/YYYY|yyyy/g, Y).replace(/YY|yy/g, Y.substr(2, 2)).replace(/MM/g, (M < 10 ? "0" : "") + M).replace(/DD|dd/g, (D < 10 ? "0" : "") + D).replace(/HH|hh/g, (H < 10 ? "0" : "") + H).replace(/mm/g, (m < 10 ? "0" : "") + m).replace(/ss/g, (s < 10 ? "0" : "") + s);
}
```

### debounce
```javascript
function debounce(fn, wait) {
  var tId;
  return function () {
    var that = this;
    var args = arguments;
    tId && clearTimeout(tId);
    tId = setTimeout(function () {
      fn.apply(that, args);
    }, wait);
  };
}
```

### deepClone
```javascript
function deepClone(source) {
  if (!source && _typeof(source) !== "object") {
    throw new Error("error arguments", "deepClone");
  }

  var targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(function (keys) {
    if (source[keys] && _typeof(source[keys]) === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}
```

### download
```javascript
function download(url, params) {
  var isImage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!url) {
    throw new Error("url not allow empty");
  }

  if (params) {
    url += "?";
    Object.keys(params).forEach(function (param) {
      if (params.hasOwnProperty(param)) {
        if (Array.isArray(params[param])) {
          params[param].forEach(function (el) {
            url += "".concat(param, "[]=").concat(el, "&");
          });
        } else if (params[param] !== undefined) {
          url += "".concat(param, "=").concat(params[param], "&");
        }
      }
    });
  }

  if (isImage) {
    var _$exec = /\/(.*?)(\?|$)/g.exec(url),
        _$exec2 = _slicedToArray(_$exec, 2),
        filename = _$exec2[1];

    var a = document.createElement("a");
    a.href = url;
    a.download = filename || true;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    window.open(url);
  }
}
```

### flatDeep
```javascript
function flatDeep(arr) {
  return arr.reduce(function (pre, val) {
    return pre.concat(Array.isArray(val) ? flatDeep(val) : val);
  }, []);
}
```

### getQueryParam
```javascript
function getQueryParam() {
  var q = {};
  location.search.replace(/([^?&=]+)=([^&]+)/g, function (_, k, v) {
    return q[k] = v;
  });
  return q;
}
```

### getQueryValueByName
```javascript
function getQueryValueByName(name) {
  var q = window.location.search.match(new RegExp("[?&]" + name + "=([^&#]*)"));
  return q && q[1];
}
```

### hyphenate
```javascript
function hyphenate(str) {
  var hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, "-$1").toLowerCase();
}
```

### isArray
```javascript
function isArray(arg) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }

  return Array.isArray(arg);
}
```

### isExternal
```javascript
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
```

### isObject
```javascript
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == "object" || type == "function");
}
```

### isPlainObject
```javascript
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
```

### numberFormatter
```javascript
function numberFormatter(num, digits) {
  var si = [{
    value: 1e18,
    symbol: "E"
  }, {
    value: 1e15,
    symbol: "P"
  }, {
    value: 1e12,
    symbol: "T"
  }, {
    value: 1e9,
    symbol: "G"
  }, {
    value: 1e6,
    symbol: "M"
  }, {
    value: 1e3,
    symbol: "k"
  }];

  for (var i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol;
    }
  }

  return num.toString();
}
```

### timeView
```javascript
function timeView(val) {
  var now = +new Date(); // 当时时间

  var timeStamp = +new Date(val); // 需要处理的时间

  var result = now - timeStamp; // 相差的时间戳

  var min = 60 * 1000; // 分钟的毫秒数

  var hour = 60 * 60 * 1000; // 小时的毫秒数

  var day = 60 * 60 * 1000 * 24; // 日的毫秒数

  if (result / min < 1) {
    return "刚刚发布";
  } else if (result / min < 60) {
    return Math.floor(result / min) + "分钟前";
  } else if (result / hour > 1 && result / hour < 24) {
    return Math.floor(result / hour) + "小时前";
  } else if (result / day > 1 && result / day < 7) {
    return Math.floor(result / day) + "天前";
  } else if (this.switchTime(now, "YYYY") === this.switchTime(timeStamp, "YYYY")) {
    return this.switchTime(timeStamp, "MM月DD日");
  } else {
    return this.switchTime(timeStamp, "YYYY年MM月DD日");
  }
}
```

### uppercaseFirst
```javascript
function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
```

### validEmail
```javascript
function validEmail(email) {
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}
```

### validURL
```javascript
function validURL(url) {
  var reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}
```
