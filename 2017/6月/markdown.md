<!-- 2017/6/14  -->

# markdown学习小结

## 一、基本格式

<!-- 分割线 -->

> 格式1

```markdown
1、注释 </br>
<!-- 注释 -->

2、分割线 </br>

---

3、加粗 </br>
**hah**,__haha__

4、引用 </br>
> 引用

5、无序列表 </br>

- 无序列表1
- 无序列表2

6、链接 </br>
图片: ![name](link) </br>
链接: [name](link)

```

> 对应的效果1

1、注释 </br>
<!-- 注释 -->

2、分割线 </br>

---

3、加粗 </br>
**haha**,__haha__

4、引用 </br>
> 引用

5、无序列表 </br>

- 无序列表1
- 无序列表2

6、链接 </br>
![图片](link) </br>
[文字](link)

> 格式2

```markdown
7、表格，冒号表示向哪里对齐 </br>
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

8、代码框，用两个 [ ``` ] 把代码圈起来

<!-- 用的时候去掉注释
```js
function() {
  console.log("haha");
}
```  -->

9、任务列表

- [ ] write the cod
- [x] finish the markdown file

```

> 对应的效果2

7、表格，冒号表示向哪里对齐 </br>
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

8、代码框，用两个 [ ``` ] 把代码圈起来

```js
function() {
  console.log("haha");
}
```

9、任务列表

- [ ] write the cod
- [x] finish the markdown file

## 二、写文章格式

```md
# 标题

## 一、内容1

1、子内容1

![]()

2、子内容2

## 二、参考文档

- [name1](link1)
- [name2](link2)
```

## 三、vscode插件

1、markdownlint

- 检查md格式且预览md文件
- 项目根目录：`.markdownlint.json`
- [使用](http://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/)

2、markdown all in one

快捷键编辑md文件

- `ctrl+b` bold
- `ctrl+i` italic
- `ctrl+shift+]` #
- `ctrl+shift+[` 去掉#
- `alt+c` check task list item

命令行：`create table to content`, 添加索引

3、markdown shortcuts

增强右键功能

## 四、参考文档

- [语法教程](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
