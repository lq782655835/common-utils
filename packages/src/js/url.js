/**
 * 获取url query参数值
 * @param {*} name 参数
 * example: getQueryParam('a'); // returns '1' on page http://domain.com/page.html?a=1&b=2
 */
export function getQueryValueByName(name) {
  let q = window.location.search.match(new RegExp("[?&]" + name + "=([^&#]*)"));
  return q && q[1];
}

/**
 * 获取所有参数。
 * 利用replace的正则以及处理函数，一行解决
 * example ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}
 */
export function getQueryParam() {
  let q = {};
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
  return q;
}

/**
 * 通用图片下载
 * @param {*} url
 */
export function downloadImage(url) {
  let [, filename] = /\/(.*?)(\?|$)/g.exec(url);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || true;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
