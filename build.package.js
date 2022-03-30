let fs = require("fs");
let path = require("path");

let ROOT_PATH = path.resolve(__dirname);
let DIST_PATH = path.resolve(ROOT_PATH, "ui");

let filePath = path.resolve(ROOT_PATH, "./src/package");

var stat = fs.stat;

var copy = function (src, dst) {
  //读取目录
  fs.readdir(src, function (err, paths) {
    console.log(paths);
    if (err) {
      throw err;
    }
    paths.forEach(function (path) {
      var _src = src + "/" + path;
      var _dst = dst + "/" + path;
      var readable;
      var writable;
      stat(_src, function (err, st) {
        if (err) {
          throw err;
        }

        if (st.isFile()) {
          readable = fs.createReadStream(_src); //创建读取流
          writable = fs.createWriteStream(_dst); //创建写入流
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copy);
        }
      });
    });
  });
};

var exists = function (src, dst, callback) {
  //测试某个路径下文件是否存在
  fs.exists(dst, function (exists) {
    if (exists) {
      //不存在
      callback(src, dst);
    } else {
      //存在
      fs.mkdir(dst, function () {
        //创建目录
        callback(src, dst);
      });
    }
  });
};
console.log(DIST_PATH, "|---|");
exists(filePath, DIST_PATH, copy);
