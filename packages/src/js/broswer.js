// https://github.com/hfhan/tools/blob/master/util.js

// 获取浏览器信息
export function getExplorerInfo() {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie")
    ? {
        //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1])
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11
      }
    : 0 <= t.indexOf("edge")
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1])
      }
    : 0 <= t.indexOf("firefox")
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1])
      }
    : 0 <= t.indexOf("chrome")
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1])
      }
    : 0 <= t.indexOf("opera")
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1])
      }
    : 0 <= t.indexOf("Safari")
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1])
      }
    : {
        type: t,
        version: -1
      };
}

// 检测是否为PC端浏览器模式
export function isPCBroswer() {
  let e = navigator.userAgent.toLowerCase(),
    t = "ipad" == e.match(/ipad/i),
    i = "iphone" == e.match(/iphone/i),
    r = "midp" == e.match(/midp/i),
    n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
    a = "ucweb" == e.match(/ucweb/i),
    o = "android" == e.match(/android/i),
    s = "windows ce" == e.match(/windows ce/i),
    l = "windows mobile" == e.match(/windows mobile/i);
  return !(t || i || r || n || a || o || s || l);
}

// 全屏
export function toFullScreen() {
  let elem = document.body;
  elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : alert("浏览器不支持全屏");
}

// 退出全屏
export function exitFullScreen() {
  let elem = document.body;
  elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert("切换失败,可尝试Esc退出");
}

// 'contextmenu', 'selectstart', 'copy' 禁止右键、选择、复制
export function disabledBrowserEvent(ev) {
  document.addEventListener(ev, function(event) {
    return (event.returnValue = false);
  });
}

export function disabledKeyEvent() {
  document.addEventListener("keydown", function(event) {
    return (
      !(
        112 == event.keyCode || //F1
        123 == event.keyCode || //F12
        (event.ctrlKey && 82 == event.keyCode) || //ctrl + R
        (event.ctrlKey && 78 == event.keyCode) || //ctrl + N
        (event.shiftKey && 121 == event.keyCode) || //shift + F10
        (event.altKey && 115 == event.keyCode) || //alt + F4
        ("A" == event.srcElement.tagName && event.shiftKey)
      ) || (event.returnValue = false) //shift + 点击a标签
    );
  });
}
