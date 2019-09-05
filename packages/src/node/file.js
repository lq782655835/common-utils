/* 读取目录下所有文件
 * @param root 根目录
 * @param reg 文件正则匹配
 */
function getAllFiles(root, reg) {
  var res = [];

  var files = fs.readdirSync(root);
  files.forEach(function(file) {
    var pathname = root + "/" + file;
    var stat = fs.lstatSync(pathname);

    if (!stat.isDirectory()) {
      var fitlPath = path.resolve(root, file).replace(/\\/g, "/");
      if (reg == null || reg.test(fitlPath)) {
        res.push(fitlPath);
      }
    } else {
      res = res.concat(getAllFiles(pathname, reg));
    }
  });

  // console.log(res);
  return res;
}

exports.getAllFiles = getAllFiles;

/**
 * 获取 root 下所有目录
 * @param root 目录
 */
function getDirs(root) {
  var result = [];

  if (root) {
    var files = fs.readdirSync(root);
    files.forEach(function(file) {
      var pathname = root + "/" + file;
      var stat = fs.lstatSync(pathname);

      if (stat.isDirectory()) {
        result.push(pathname);
      }
    });
  }

  return result;
}

exports.getDirs = getDirs;

/* 创建文件
 * @param root 保存的路径
 * @param content 文件内容
 */
function createFile(root, content) {
  var pathArr = root.split("/");
  var dirPath = pathArr.slice(0, pathArr.length);
  var fileName = pathArr.slice(pathArr.length);
  for (var i = 0; i < dirPath.length; i++) {
    var p = path.resolve(dirPath.slice(0, i).join("/"));
    if (dirPath[i] && !fs.existsSync(p)) {
      fs.mkdirSync(p, "0777");
    }
  }
  fs.writeFileSync(path.resolve(root), content, {});
}

exports.createFile = createFile;

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
function exists(src, dst, callback) {
  fs.exists(dst, function(exists) {
    if (exists) {
      callback(src, dst);
    } else {
      fs.mkdir(dst, function() {
        callback(src, dst);
      });
    }
  });
}

exports.exists = exists;

// 文件或者目录是否存在
function isExists(src, callback) {
  fs.exists(src, function(exists) {
    if (callback) {
      callback(exists);
    }
  });
}

exports.isExists = isExists;

/**
 *  create by zengwenfu
 *  src: 源文件目录
 *  files: 文件数组
 *  dst: 目的文件目录
 */
function copyFiles(src, files, dst) {
  var readable = false;
  var writable = false;
  var _src = false;
  var _dst = false;
  for (var i = 0; i < files.length; i++) {
    _src = src + "/" + files[i];
    _dst = dst + "/" + files[i];
    // 创建读取流
    readable = fs.createReadStream(_src);
    // 创建写入流
    writable = fs.createWriteStream(_dst);
    // 通过管道来传输流
    readable.pipe(writable);
  }
}

exports.copyFiles = copyFiles;
