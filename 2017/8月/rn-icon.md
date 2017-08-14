<!-- 2017/8/14  -->

# react-native-vertor-icons

包安装：`yarn add react-native-vector-icons`

项目使用  ：`import Icon from 'react-native-vertor-icons/FontAwesome`

## 一、属性

size, name, color, style

style包括: `color, fontSize, backgroundColor, padding, margin, borderWidth, borderColor, borderRadius`

```js
<Icon name="ios-person" size={30} color="#4F8EF7" />
```

## 二、Icon.Button 组件

```js
<Icon.Button name='facebook' backgroundColor='#f00' onPress={this.loginWithFacebook}>
  click me
</Icon.Button>
```

## 三、参考文档

- [github: rn-icon](https://github.com/oblador/react-native-vector-icons)
