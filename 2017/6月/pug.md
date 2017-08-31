<!-- 2017/6/18  -->

# pug 学习笔记

## 一、语法

```pug
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5)
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
```

```pug
doctype html
html(lang='en')
  head
    title Pug
    script(type='text/javascript')
      if (foo) bar(1+5)
  body
    h1 Pug - node template engine
    #container.col
      p You are amazing
      p Pug is a terse and simple templating language with a strong focus on performance and powerful features.
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pug</title>
    <script type="text/javascript">
      if (foo) bar(1 + 5)
    </script>
  </head>
  <body>
    <h1>Pug - node template engine</h1>
    <div id="container" class="col">
      <p>You are amazing</p>
      <p>Pug is a terse and simple templating language with a strong focus on performance and powerful features.</p>
    </div>
  </body>
</html>
```

## 二、参考文档

- [官网](https://pugjs.org/api/getting-started.html)
