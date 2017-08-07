# chrome扩展

准备一个空文件，新建文件`manifest.json`,

## manifest.json

---

声明该扩展的作用和取得相应权限。

```json
// 栗子
{
  // 基本信息
  "manifest_version": 2,
  "name": "暨大抢课",
  "description": "暨大抢课脚本，正在测试中...",
  "version": "1.0",
  // 放在chrome工具栏的图标
  "browser_action": {
    "default_icon": "icon.png", // 图标
    "default_popup": "popup.html", // 显示页面
    "default_title": "暨大抢课脚本" // 悬浮提示
  },
  // 权限
  "permissions": [
    "activeTab", // 活动选项卡
    "https://ajax.googleapis.com/",
    "tabs", // 浏览器选项卡
    "notifications", // 浏览器通知
    "storage" // 存储
  ],
  // 扩展设置页面。图标右键->选项
  "options_page": "options.html",
  // 扩展常驻后台
  "background": {
    "srcipts": ["js/background.js"]
  },
  // 自定义页面替换默认页面
  "chrome_url_overrides": {
    "newtab": "tab.html",
    "bookmarks": "bookmark.html",
    "history": "history.html"
  }
}
```

## icon.png

---

19*19像素的图像

## popup.html

---

## 参考文档

---

- [官网: 入门教程](https://developer.chrome.com/extensions/getstarted)</br>
- [官网: chrome开发者](https://developer.chrome.com/extensions)</br>
- [知乎: 从零开始写一个 Chrome 扩展](https://www.zhihu.com/question/20179805)</br>
- [dom api](https://www.w3schools.com/jsref/dom_obj_document.asp)</br>
