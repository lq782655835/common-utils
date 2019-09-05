// 操作系统
exports.getSystem = function() {
  return os.homedir().indexOf("/") == 0 ? "mac" : "window";
};

// 获取 ip 地址
function getIp() {
  var ip = "127.0.0.1";

  try {
    var network = require("os").networkInterfaces();
    var iplist = network.en0;

    if (iplist == null) {
      for (var key in network) {
        iplist = network[key];
        break;
      }

      if (iplist == null) {
        return ip;
      }
    }

    if (iplist.length == 1) {
      return iplist[0].address;
    } else {
      for (var key in iplist) {
        var ipModel = iplist[key];
        if (ipModel.family == "IPv4") {
          return ipModel.address;
        }
      }
    }
  } catch (e) {
    console.log(e.message);
  }

  return ip;
}

exports.getIp = getIp;
