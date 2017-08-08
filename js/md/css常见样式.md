<!-- 2017/8/8  -->

# css常见样式

## 一、清除浮动

---

```less
&:after {
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
  content: '020';
}
```

## 二、文字样式

---

```less
.text {
  font-size: 20px;
  font-weight: normal|bold|lighter;
  font-style: normal|italic;
  font-family: 'sans-serif';
}
```
