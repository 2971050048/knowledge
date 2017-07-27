# ECharts学习小结

ECharts是纯Javascript图表库，可流畅运行在PC和移动设备上，兼容当前绝大部分浏览器(IE8+)，底层依赖Canvas类库ZRender

## 特性

---

- 图表类型

折线图，柱状图，散点图，饼图，K线图</br>
用于统计的盒形图</br>
用于地理数据可视化的地图，热力图，线图</br>
用于关系数据可视化的关系图，treemap，多维数据可视化的平行坐标</br>
还有用于BI的漏斗图，仪表盘，并支持图与图间的混搭。

- 坐标系

ECharts3支持直角坐标系(catesian，同grid)、极坐标系(polar)、地理坐标系(geo)。

## 使用

---

```javascript
import echarts from 'echarts'
let myChart = echarts.init(document.getElementById('main')); // 绑定dom元素
let options = {}; // 图表组件
let myChart.setOption(options); // 绘制图表
```

## options包括的组件

---

### 1. 组件常用的属性

---

- color类型

```javascript
color: '#f00'|'rgba(255,0,0,0.5)'|<object>
// 以下是<object>，即渐变
color: {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
    offset: 0, color: '#0f0'
  }, {
    offset: 0, color: '#00f'
  }],
  globalCoord: false // true时表以上四值为绝对像素
}
color: {
  type: 'radial',
  x: 0.5,
  y: 0.5,
  r: 0.5,
  colorStops: [{
    offset: 0, color: '#0f0'
  }, {
    offset: 0, color: '#00f'
  }],
  globalCoord: false
}
```

- font四属性

```javascript
// 默认属性为第一项
fontStyle: 'normal|italic'
fontWeight: 'bolder|bold|normal|lighter|<number>'
fontSize: 18|<number>
fontFamily: 'sans-serif'
```

- shadow四属性

```javascript
shadowColor
shadowOffsetX: <number>
shadowOffsetY: <number>
shadowBlur: <number>
```

- border属性

```javascript
borderColor
borderWidth
```

### 2. title 组件属性(标题)

---

- 文本

text,textStyle{color,font},link,target</br>
subtext,subStyle,sublink,subtarget,itemGap

- 盒子

left,top,padding,,textAlign,textBaseline</br>
shadow,border,backgroundColor

- 其他

show,z,zlevel

### 3. legend 组件属性(图例)

---

- 文本

data[{name,icon,textStyle}],textStyle,itemGap

- 盒子

width,height,left,top,padding</br>
shadow,border,backgroundColor

- 单个图例

itemWidth,itemHeight，orient</br>
align,formatter</br>
selected,selectedMode,inactiveColor

- 其他

show,z,zlevel,tooltip

### 4. tooltip 组件属性(提示框)

---

- 文本

formatter

- 显示

trigger,triggerOn,showContent,alwaysShowContent,
showDelay,hideDelay

- 盒子

extraCssText,padding,position
border,backgroundColor

- axisPointer

type, crossStyle,label{show, formatter}

