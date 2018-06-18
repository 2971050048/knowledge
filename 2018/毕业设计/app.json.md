<!-- 2018/4/16 -->

# app.json

## 一、解析

小程序的全局配置

```json
{
  // 页面路径
  "pages": [
    "pages/index/index", // 首页
    "pages/logs/index"
  ],
  // 导航、公共背景
  "window": {
    // 导航背景、文字(内容+颜色)
    "navigationBarBackgroundColor": "Demo",
    "navigationBarTitleText": "Demo",
    "navigationBarTextStyle": "#fff",
    // 背景颜色
    "backgroundColor": "#fff",
    // 下拉loading
    "enablePullDownRefresh": false,
    "backgroundTextStyle": "dark", // 或light
    // 触发底部事件时距底部的距离
    "onReachBottomDistance": 50
  },
  // tab
  "tabBar": {
    // 位置
    "position": "bottom", // 或top
    // 背景、上边框颜色
    "backgroundColor":"",
    "borderStyle":"black", // 或white
    // 文字颜色
    "color": "",
    "selectedColor": "",
    // 页面路径
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "", // 40kb, 81px*81px
      "selectedIconPath": ""
    }, {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }]
  },
  // 网络请求超时时间
  "networkTimeout": {
    "request": 60000, // wx.request的超时时间
    "downloadFile": 60000,
    "uploadFile": 60000,
    "connectSocket": 60000,
  },
  // 在console面板显示debug信息
  // 信息包括：page注册、页面路由、数据更新、事件触发
  "debug": true
}
```

注意的点：
小程序增减页面，需对pages数组进行修改
当tabBar的position设为top时，不显示icon

## 二、page.json

页面的窗口配置，只设置app.json中的window字段

```json
{
  // 导航背景、文字(内容+颜色)
  "navigationBarBackgroundColor": "Demo",
  "navigationBarTitleText": "Demo",
  "navigationBarTextStyle": "#fff",
  // 背景颜色
  "backgroundColor": "#fff",
  // 下拉loading
  "enablePullDownRefresh": false,
  "backgroundTextStyle": "dark", // 或light
  // 触发底部事件时距底部的距离
  "onReachBottomDistance": 50,
  // 页面能否滚动
  "disableScroll": false,
}
```

只是多了个属性 `disableScroll`

## 参考文档

- [app.json配置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)
