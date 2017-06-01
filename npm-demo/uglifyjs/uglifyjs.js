/**
功能: js 解析|缩小|压缩|美化 工具
教程:
  https://github.com/mishoo/UglifyJS2#api-reference
  http://lisperator.net/uglifyjs/parser
UglifyJS.minify(code, options)
  code: 源js代码
  options: {
    warnings:
  }
 */

var UglifyJS = require('uglify-js')

var options = {
  warnings: false|true|'verbose',//默认false，true时得到result.warnings,'verbose'时得到更多warings
  parse: {
    bare_returns: false, //默认false, support top level return statements
    html5_comments: true,//默认true
    shebang: true,//支持'#!command'作为第一行
  },
  compress: false|{//默认{}，好多属性。。

  },
  mangle: true|{//默认true，损坏变量,函数名
    reserved: [],//跳过指定的变量
    toplevel: ,//损坏在顶级范围内声明的名字
    eval: ,
    keep_fnames: false,//true时不损坏函数名
    properties: {

    }
  },
  output: null|{//默认null,好多属性。。

  },
  sourceMap: {//默认false

  },
  toplevel: false|true,//默认false
  ie8: false|true//默认false，true时支持ie8
}

var result = UglifyJS.minify(code, options)
console.log(result.code|error|warnins)
