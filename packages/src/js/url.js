/**
 * 获取url query参数值
 * @param {*} name 参数
 * example: getQueryParam('a'); // returns '1' on page http://domain.com/page.html?a=1&b=2
 */
export const getQueryValueByName = name => {
  let q = window.location.search.match(new RegExp("[?&]" + name + "=([^&#]*)"));
  return q && q[1];
};

/**
 * 获取所有参数。
 * 利用replace的正则以及处理函数，一行解决
 * example ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}
 */
export const getQueryParam = () => {
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
export const download = (url, params, isImage = true) => {
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
