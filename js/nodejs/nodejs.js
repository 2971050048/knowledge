/**
 * 教程: http://www.runoob.com/nodejs/
 * express: http://javascript.ruanyifeng.com/nodejs/express.html
 * 社区: https://cnodejs.org/
 */

// server.js
  var http = require('http');
  http.createServer(function (request, response) {
    // 发送HTTP头部, 状态值: 200 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送响应数据"Hello World"
    response.end('Hello World\n');
  }).listen(8888);
  // 终端打印如下信息，就能在127.0.0.1:8888访问到网站
  console.log('Server running at http://127.0.0.1:8888/');
  console.log(' ');

// REPL(read eval print loop)交互式解释器
  /** 命令
    node - 进入repl环境
    ctrl+c - 退出当前终端
    ctrl+c 按两次 - 退出REPL
    ctrl+d - 退出Node REPL
    向上/向下键 - 查看输入的历史命令
    tab  - 列出当前命令
    .help - 列出使用命令
    .break - 退出多行表达式
    .clear - 退出多行表达式
    .save filename - 保存当前的 Node REPL 会话到指定文件
    .load filename - 载入当前 Node REPL 会话的文件内容
    下划线变量获取运算结果
  */
/** 事件循环
  Node.js是单线程应用程序，通过事件和回调支持并发; 每个API都是异步的，并作为一个独立线程运行，使用异步函数调用。
  多数事件机制用观察者模式实现。每个异步事件(handler函数)都生成一个事件观察者，如果有事件发生就调用该回调函数.
 */

  // main.js
  var events = require('events');
  var eventEmitter = new events.EventEmitter();
  eventEmitter.on('connection', function() {// 绑定connection事件
    console.log('连接成功。');
    eventEmitter.emit('data_received');
  });
/**
  eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
  });
  eventEmitter.emit('connection');// 触发connection事件
  console.log("程序执行完毕。");
  console.log(' ');

  // node main.js 得到结果"连接成功 数据接收成功 程序执行完毕"

/** EventEmitter函数
 * 事件触发和监听器功能的分装
 * 支持事件响应的核心模块都是EventEmitter的子类，如fs,net,http
 */

  // main.js
  var events = require('events');
  var eventEmitter = new events.EventEmitter();
  var listener1 = function listener1() {// 监听器 #1
    console.log('监听器 listener1 执行。');
  }
  var listener2 = function listener2() {// 监听器 #2
    console.log('监听器 listener2 执行。');
  }
  eventEmitter.addListener('connection', listener1);// 绑定connection事件，处理函数为listener1
  eventEmitter.on('connection', listener2);
  var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
  console.log(eventListeners + " 个监听器监听连接事件。");
  eventEmitter.emit('connection');// 处理connection事件 
  eventEmitter.removeListener('connection', listener1);// 移除监听器#1
  console.log("listener1 不再受监听。");
  eventEmitter.emit('connection');
  eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
  console.log(eventListeners + " 个监听器监听连接事件。");
  console.log("程序执行完毕。");
  console.log(' ');

/** Buffer类(缓存区)
  js语言自身只有字符串数据类型，没有二进制数据类型。在处理像TCP流或文件流时，必须使用到二进制数据。
  Node.js的Buffer类用来创建存放二进制数据的缓存区。
  Node.js中处理I/O操作中移动数据时，有可能使用Buffer库
 */
  var buf = new Buffer(10);//var buf = new Buffer('hello nodejs','utf-8');//创建buffer实例
  buf.write('hello nodejs');//写入缓冲区
  // console.log(buf.toString());//从缓冲区读取数据
  console.log(buf.toJSON());//转为json对象，结果{type:'Buffer',data:[104,101,108,108,111,32,110,111,100,101]}
  console.log(' ');

/** stream流
 * 
 */
  // main.js
  var fs = require("fs");
  var readerStream = fs.createReadStream('input.txt');// 创建一个可读流
  var writerStream = fs.createWriteStream('output.txt');// 创建一个可写流
  // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
  readerStream.pipe(writerStream);
  console.log("程序执行完毕");
  console.log();

  // compress.js 链式流
  var fs = require("fs");
  var zlib = require('zlib');
  fs.createReadStream('input.txt')  // 压缩input.txt文件为input.txt.gz
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
  console.log("文件压缩完成。");
  console.log(' ');

  // decompress.js
  // var fs = require('fs');
  // var zlib = require('zlib');
  // fs.createReadStream('input.txt.gz')
  //   .pipe(zlib.createGunzip())
  //   .pipe(fs.createWriteStream('input.txt'))
  // console.log('文件解压完成');
  // console.log(' ');

/** 全局对象
  console对象
    console.log|info|error|warn([data][, ...]) 打印字符并以换行符结束|信息性消息|错误消息|警告消息
    console.dir(obj[, options]) 对一个对象进行检查（inspect）
    console.time|timeEnd(label)  输出时间，表示计时开始|结束时间，表示计时结束
    console.trace(message[, ...]) 当前执行的代码在堆栈中的调用路径
    console.assert(value[, message][, ...]) 判断某表达式或变量是否为真，接手两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果
  progress对象: 描述当前Node.js进程状态的对象，提供一个与操作系统的简单接口
    事件
      exit 进程准备退出时触发
      beforeExit 当node清空事件循环，且没有其他安排时触发这个事件。
      uncaughtException 当异常冒泡回到事件循环，触发这个事件
      signal 进程接收到信号时触发
    属性
      stdin|stdout|stderr: 标准输入|输出|错误流
      argv: 返回数组，由命令行执行脚本时的参数组成。第一个成员是node，第二个成员是脚本文件名，其余成员是脚本文件参数
      execPath: 返回执行当前脚本的绝对路径
      execArgv: 返回数组，成员是node可执行文件与脚本文件之间的命令行参数
      env: 返回对象，成员为当前shell的环境变量
      exitCode: 进程退出时的代码，如果进程通过process.exit()退出，不需要指定退出码。
      version|versions: Node的版本|node的版本和依赖
      config: 包含用来编译当前node执行文件的js配置选项的对象。与运行./configure脚本生成的"config.gypi"文件相同
      pid|title: 当前进程的进程号|进程名，默认值为"node"
      arch: 当前CPU架构：'arm'、'ia32' 或者 'x64'。
      platform: 运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
      mainModule: require.main 的备选方法。
    方法
      abort(): 让node退出并生成一个核心文件
      chdir(directory): 改变当前工作进程的目录，如果操作失败抛出异常
      cwd(): 返回当前进程的工作目录
      exit([code]): 使用指定的code结束进程
      仅在POSIX平台上可用|获取(例如，非Windows 和 Android)
        getgid()|setgid(id): 获取进程的群组标识(数字id),
        getuid()|setuid(id): 获取进程的用户标识(数字id),仅在POSIX平台上可用|获取
        getgroups()|setgroups(groups): 返回|设置进程的群组id数组。仅在POSIX平台上可用
        initgroups(user, extra_group): 读取/etc/group，并初始化群组访问列表,需要有root权限，或者有CAP_SETGID能力。
      kill(pid[, signal]): 发送信号给进程
      memoryUsage(): 返回一个对象，描述Node进程所用的内存状况，单位为字节
      nextTick(callback): 一旦当前事件循环结束时调用回调函数
      umask([mask]): 设置或读取进程文件的掩码。子进程从父进程继承掩码。
      uptime(): 返回Node已经运行的秒数
      hrtime(): 返回当前进程的高分辨时间，形式为 [seconds, nanoseconds]数组
 */
  console.log(__filename);//当前文件路径+文件名
  console.log(__dirname);//当前文件路径
  // progress事件
    process.on('exit', function(code) {
      setTimeout(function() {
        console.log("该代码不会执行");
      }, 0);  
      console.log('退出码为:', code);
    });
    console.log("程序执行结束");
    // 结果: 程序执行结束 退出码为:0
  // progress属性
    process.stdout.write("Hello World!" + "\n");
    process.argv.forEach(function(val, index, array) {
      console.log(index + ': ' + val);
    });
    console.log(process.execPath);
    console.log(process.platform);
    console.log(' ');
    // 结果: hello world! 
    // 0: C:\Program Files\nodejs\node.exe 1:D:\tools\js\nodejs\nodejs.js
    // C: \Program Files\nodejs\node.exe win32

/** util对象
 * util.inherits(子函数，母函数);实现对象间原型继承
 * util.inspect(object[,showHidden][,depth][,colors]);将对象转化为字符串
 * util.isArray(obj)|isRegExp(obj)|isDate(obj)|isError(obj)
 */
  var util = require('util');
  function Foo() {
    this.name = 'foo';
    this.year = 2017;
    this.sayHello = function() {
      console.log('hello' + this.name);
    }
  }
  Foo.prototype.showName = function() {
    console.log(this.name);
  }
  function Bar() {
    this.name = 'bar';
  }
  util.inherits(Bar, Foo);
  // Bar继承了Foo的原型对象
  var u1 = util.inspect(Bar);
  var u2 = util.isArray([]);
  var u3 = util.isRegExp(/some/);
  var u4 = util.isDate(new Date());
  var u5 = util.isError(new Error());
  console.log(u1, u2, u3, u4, u5);

/** 文件系统
 * 读文件: fs.readFile(path, function(err, data)) //data是文件内容
 * 打开文件: fs.open(path, flags[, mode], function(err,fd)) //fd是一个文件标志
 * 获取文件信息: fs.stat(path, function(err,stats))
 * 写入文件: fs.writeFile(file, data[, options], function（err))
 * 读取文件: fs.read(fd, buffer, offset, length, position, function(err,bytesRead,buffer))
 * 关闭文件: fs.close(fd, function())
 * 截取文件: fs.ftruncate(fd, len, function())
 * 删除文件: fs.unlink(path, function())
 * 创建目录: fs.mkdir(path[,mode], function())
 * 读取目录: fs.readdir(path, function(err, files)) //files为目录下文件数组列表
 * 删除目录: fs.rmdir(path, function())
 */
  var fs = require('fs');
  fs.readFile('input.txt', function(err, data) {//data是文件内容
    if(err) console.error(err);
    console.log('读取文件得到:' + data.toString());
  })
  fs.open('input.txt','r+',function(err, fd) {//fd是一个文件标志
    if(err) console.error(err);
    console.log('文件打开成功');
  })
  fs.stat('input.txt',function(err, stats){//stats为对象，有好多方法
    console.log(stats)
  })

/** 
 *
 */