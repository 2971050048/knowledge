/**
vue-loader是Webpack的loader，将Vue组件转换为JS模块
教程: https://vue-loader.vuejs.org/zh-cn/
特性:
  ES2015 默认支持;
  允许对style使用SASS和对template使用Jade
  .vue 允许自定义节点，使用自定义的loader处理
  把style和template中的静态资源当作模块来对待，并使用Webpack loaders进行处理；
  每个组件模拟出CSS作用域
    当style标签有scoped属性时，只作用于当前组件中的元素
  支持开发期组件热重载
搭建项目:
  npm install -g vue-cli
  vue init webpack-simple hello-vue
  cd hello-vue
  npm install
  npm run dev

 */