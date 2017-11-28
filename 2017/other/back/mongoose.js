/**
 * 教程: http://mongoosejs.com/docs/guide.html
 * 
 */

// es6转码
require('babel-register')({
  plugins: ['transform-async-to-generator']
})

// 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/perhaps')

// 添加事件监听 3
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connected success')
})

// 创建集合
const colSchema = mongoose.Schema({
  name: String
})

// 添加方法
colSchema.methods.speak =  function() {
  const g = this.name? 'hello ' + this.name : 'who are you'
  console.log(g) //2
}

// 创建集合名字并使集合工作
const col = mongoose.model('col', colSchema)

// 添加文档到集合
const doc = new col({ name: 'perhaps' })
console.log(doc.name) //1
doc.speak()

// 文档保存到数据库
doc.save(function (err, fluffy) {
  if (err) return console.error(err);
  // fluffy.speak();
  console.log('save to db') //5
})

// 集合查找 4
col.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
