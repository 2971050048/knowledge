# webpack学习笔记(添加)

CommonJS规范:
概述:
  Node由模块组成,用CommonJS模块规范: 每个文件是一个模块,有自己的作用域
  模块内部,module对象代表当前模块
  module.exports是对外接口加载某模块,其实是加载某模块的module.exports
  require方法加载模块 
  模块加载一次,运行结果就缓存了,清除缓存可让模块再次运行
module对象:
  module.id       模块识别符
  module.filename 绝对路径模块文件名
  module.loaded 返回布尔值,表模块是否已完成加载
  module.parent   返回对象,表调用该模块的模块, 可判断自身是否为入口文件
  module.children 返回数组,表模块要用的其他模块
  module.exports 表模块对外输出值
  tips: 
    Node为每个模块提供一个exports变量,使得var exports = module.exports;
    直接给exports对象添加属性,但不能给exports直接赋值;
CommonJS规范与AMD规范的区别:
  CommonJS同步加载模块,即只有加载完成,才执行后面操作。适用服务器编程。
  AMD是非同步加载模块,允许指定回调函数。适用浏览器环境。
require:
  require功能: 读入并执行JS文件,返回模块的exports对象
  require加载文件,后缀名默认为.js
  参数:
    以"/"开头,加载绝对路径模块文件。
      比如,require('/home/marco/foo.js')将加载/home/marco/foo.js。
    以"."”开头,加载相对路径模块文件。
      比如,require('./circle')加载当前脚本同目录的circle.js。
    不以".""或"/"开",加载默认核心模块(Node系统安装目录中)
  目录加载规则:
    若require参数字符为目录,则查看目录的package.json,并加载main字段指定的入口文件。若package.json没main,或没package.json,则加载该目录的index.js或index.node
  模块缓存:
    node会缓存初次加载的模块,保存在require.cache中
    删除某模块缓存: delete require.cache[moduleName];
  require函数方法:
    require(): 加载外部模块
    require.resolve(): 将模块名解析到一个绝对路径
    require.main:  指向主模块
    require.cache: 指向所有缓存的模块
    require.extensions: 根据文件的后缀名,调用不同的执行函数


webpack:

安装webpack:
  npm init
  npm install webpack --save-dev

配置webpack:
  每个项目下都必须配置webpack.config.js, 告诉webpack需要做什么
  webpack.config.js:
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        //"-loader"可省略.多个loader间用"!"连接
        //所有的加载器都需要通过npm来加载
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};

运行webpack:
  webpack --display-error-details
  webpack --config XXX.js //用另一配置文件来打包
  webpack --watch //监听变动并自动打包
  webpack -p     //压缩混淆脚本
  webpack -d    //生成map映射文件，告知哪些模块被打包到哪里

