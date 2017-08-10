<!-- 2017/5/10  -->

# vue学习笔记

Vue.js专注于MVVM模型的ViewModel层。通过双向数据绑定把View层和Model层连接起来。实际的DOM封装和输出被抽象为Directives和Filters。

## 一、DOM上的指令

---

Vue.js专注于MVVM模型的ViewModel层。通过双向数据绑定把View层和Model层连接起来。实际的DOM封装和输出被抽象为Directives和Filters

- 直接文本插值: {{message}}
- 绑定元素属性: v-bind(缩写为":")
- 绑定事件监听器: v-on(缩写为"@")
- 条件渲染: v-if v-else v-else-if
- 控制元素显示: v-show //切换元素的CSS属性display
- 获得数组数据: v-for
- 只渲染一次: v-once
- 双向绑定: v-model, 从view层到model层
- 更新元素innerHTML: v-html

```vue
<template>
  <div id="app">
    <!-- S = 指令 -->
    <p>{{message}}</p>
    <p v-once>{{message}}</p>
    <p v-bind:title="message">绑定属性</p>
    <p :title="message">绑定属性</p><!-- v-bind的缩写 -->
    <button v-on:click="funA">绑定事件</button>
    <button @click="funA">绑定事件</button><!-- v-on的缩写 -->
    <p v-if="seen">控制显示</p>
    <ol>
      <li v-for="todo in fruits">{{todo.name}} {{todo.price}}</li>
    </ol>
    <input v-model="message">
    <!-- E = 指令 -->
    <!-- S = 组件 -->
    <price-item v-for="todo in fruits" v-bind:todo='todo'></price-item>
    <!-- E = 组件 -->
  </div>
</template>

<script>
  Vue.component('price-item', {
    props: ['todo'],
    template: '<li>{{todo.price}}</li>'
  })
  new Vue({
    el: '#app',
    data: {
      message: 'hello vue',
      seen: true,
      fruits: [
        { name: 'apple', price: 12 },
        { name: 'orange', price: 10 },
        { name: 'banana', price: 13}
      ]
    },
    methods: {
      funA: function() {
        this.message = this.message.split("").reverse().join("");
      }
    }
  })
</script>
```

## 二、vue实例的生命周期钩子

---

不能使用箭头函数定义生命周期方法,理由是箭头函数绑定了父级作用域的上下文，所以this将不会按照期望指向 Vue 实例

- beforecreate: 实例初始化后，数据观测和event/watcher事件配置之前被调用
- created: 实例创建完成后被调用,已完成:数据观测、属性和方法运算、watch/event事件回调
- beforeMount:
- mounted: 挂载元素，获取到DOM节点
- beforeUpdate:
- updated: 执行依赖于DOM的操作,如果对数据统一处理，在这里写上相应函数
- activated: keep-alive组件激活时调用
- deactivated: keep-alive组件停用时调用
- beforeDestroy: 实例销毁之前调用,可以做一个确认停止事件的确认框
- destroyed: Vue实例指示的所有东西都会解绑定
- nextTick: 更新数据后立即操作dom

## 三、计算属性computed和methods对比

---

计算属性只有在相关依赖发生改变时才会重新求值

```vue
<template>
  <div id="app">
    <p>{{message}}</p>
    <p>{{reverseMessage}}</p>
    <p>{{date}}</p>
  </div>
</template>
<script>
new Vue({
  el: '#app',
  data: {
    message: 'hello perhaps',
    date: Date.now().toLocaleString()
  },
  computed: {
    reverseMessage: function() {
      return this.message.split("").reverse().join("")
    }
  },
})
</script>

```

## 四、class与style绑定

---

在v-bind用于class和style时，表达式除了字符串，还可以是对象或数组

```vue
<template>
  <div id="app">
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <div :class="[ activeClass, errorClass]"></div>
    <div :class="{ active: isActived, 'text-danger': hasError }" class="static"></div>
    <div :class="classObject"></div><!-- 配合computed属性 -->
  </div>
</template>
<style lang="">
  .active {
    color: #FFFFFF;
  }
  .text-danger {
    color: #F00;
  }
</style>
<script>
  new Vue({
    el: "#app",
    data: {
      activeColor: #FFF,
      fontSize: 13,
      activeClass: 'active',
      errorClass: 'text-danger'
      isActived: true,
      hasError: true,
      error: null,
    },
    computed: {
      classObject: function() {
        return {
          active: this.isActived && !this.error,
          'text-danger': this.error
        }
      }
    }
  })
</script>
```

## 五、组件(尽量使用短横线隔开式)

---

5.1 基本模板

---

1、全局组件: Vue.component(id, [definition])

2、局部组件: new Vue({components: {id: definition}})

3、组件限制: ul,ol,table,select 限制了能被包裹的元素,像 <option> 这样的元素只能出现在某些其它元素内部

- 方案1,使用is属性: `<table> <tr is="my-row"></tr> </table>`
- 方案2,模板`<script type="text/x-template">|JavaScript内联模版字符串|.vue 组件`

4、组件data必须是函数

5、父子组件关系: props down, events up
  prop是单向绑定，父组件变化传递给子组件，子组件若想修改得到的prop值，可用"局部变量"或"局部+计算属性"
  prop验证，传入的数据不符合规格，Vue会发出警告
    type可为：Number|String|Boolean|Object|Function|Array

```vue
//模板1：
<template>
  <div id="list">
    <input type="text" v-model="newText" @keyup.enter="addNewText" placeholder="add new text">
    <ol>
      <!-- 组件属性title是为了获取数组元素值，remove是自定义事件，是为了控制父组件 -->
      <li is="list-item" v-for="(todo, index) in todos" :title="todo" @remove="todos.splice(index, 1)"></li> 
    </ol>
  </div>
</template>
<script>
// 组件全局注册
Vue.component('list-item', {
  template: '<li>{{title}}<button @click="$emit(\'remove\')">X</button></li>'
  props: {
    'title': String,
    'prop2': [Number, String],
    'prop3': {//必传字符串
      type: String,
      required: true
    },
    'prop4': {//数字，默认值为1
      type: Number,
      default: 1
    },
    'prop5': {//对象|数组的默认值为函数
      type: Object,
      default: function() {
        return { message: 'vue' }
      }
    },
    'prop6': {//自定义校验
      type: Number,
      default: 1,
      required: true,
      validator: function(value) {
        return value > 0
      }
    }
  },
})
new Vue({
  el: '#list',
  data: {
    newText: '',
    todos: [
      'hello perhaps',
      'it is a nice day',
      'love you'
    ]
  },
  methods: {
    addNewText: function() {
      this.todos.push(this.newText),
      this.newText=''
    }
  },
  // 组件局部注册
  components: {
    'list-item2': {
      props: ['title'],
      template: '<li>{{title}}<button @click="$emit(\'remove\')">X</button></li>'
    }
  }
})
</script>
```

5.2 组件自定义事件

---

自定义事件: $on(eventName)监听事件, $emit(eventName)触发事件

```vue
// 模板2
<template>
  <div id="counter-event">
    <p>{{ total }}</p>
    <button-counter @increment="incrementTotal"></button-counter><!-- 监听自定义事件 -->
    <button-counter @increment="incrementTotal"></button-counter>
  </div>
</template>
<script>
  Vue.component('button-counter', {
    template: '<button @click="incre">{{ counter }}</button>',
    data: function() {
      return {
        counter: 1
      }
    },
    methods: {//自定义事件
      incre: function() {
        this.counter+=1,
        this.$emit('increment')
      }
    }
  })
  new Vue({
    el: '#counter-event',
    data: {
      total: 2
    },
    methods: {
      incrementTotal: function() {
        this.total+=1
      }
    }
  })
</script>
```

5.3 v-model表单控件

---

`<input v-model="something">` 相当于语法糖 
`<input :value="something" @input="something = $event.target.value">`

```vue
<template>
  <div id="app">
    <currency-input label="Price" v-model="price" ></currency-input>
    <currency-input label="Shipping" v-model="shipping" ></currency-input>
    <currency-input label="Handling" v-model="handling" ></currency-input>
    <currency-input label="Discount" v-model="discount" ></currency-input>
    <p>Total: ${{ total }}</p>
  </div>
</template>
<script>
  Vue.component('currency-input', {
    template: '\
      <div>\
        <label v-if="label">{{ label }}</label>\
        $<input ref="input" :value="value"\
          @input="updateValue($event.target.value)"\
          @focus="selectAll"\
          @blur="formatValue"\
        >\
      </div>\
    ',
    props: {
      value: {
        type: Number,
        default: 0
      },
      label: {
        type: String,
        default: ''
      }
    },
    mounted: function () {
      this.formatValue()
    },
    methods: {
      updateValue: function (value) {
        var result = currencyValidator.parse(value, this.value)
        if (result.warning) {
          this.$refs.input.value = result.value
        }
        this.$emit('input', result.value)
      },
      formatValue: function () {
        this.$refs.input.value = currencyValidator.format(this.value)
      },
      selectAll: function (event) {
        // Workaround for Safari bug
        // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
        setTimeout(function () {
          event.target.select()
        }, 0)
      }
    }
  })

  new Vue({
    el: '#app',
    data: {
      price: 0,
      shipping: 0,
      handling: 0,
      discount: 0
    },
    computed: {
      total: function () {
        return ((
          this.price * 100 + 
          this.shipping * 100 + 
          this.handling * 100 - 
          this.discount * 100
        ) / 100).toFixed(2)
      }
    }
  })
</script>

```

## 六、事件处理v-on

---

1.v-on: 事件.修饰符;  在vue实例上放在methods对象中

2.$event可以访问原生dom事件. <button @click='fun($event)'></button>

3.事件修饰符: 
- stop: 阻止事件冒泡
- prevent: 不重载页面
- capture: 使用事件捕获模式
- self: 事件在该元素本身才触发(而不是子元素)
- once: 事件只触发一次

4.keyup事件修饰符:
  esc|tab|shift|ctrl|meta|alt|space|enter|delete(删除和退格)|f1|up|down|left|right
  其中shift|ctrl|meta|alt也能监听鼠标事件

## 七、表单控件绑定 v-model

---

修饰符:
`.lazy`: 让v-model在change事件中同步(默认是input事件)
`.number`: 自动将用户的输入值转为Number类型
`.trim`: 自动过滤用户输入的首尾空格

 ```vue
<template>
<div id="app">
  <!-- 复选框绑定到数组 -->
  <input type="checkbox" id="foo" value="1" v-model="array">
  <label for="foo">foo</label>
  <input type="checkbox" id="bar" value="2" v-model="array">
  <label for="bar">bar</label>
  <input type="checkbox" id="baz" value="3" v-model="array">
  <label for="baz">baz</label>
  <p>{{array}}</p>
  <!-- 选择列表 -->
  <select v-model="selected">
    <option value="1">A</option>
    <option value="2">B</option>
    <option value="3">C</option>
  </select>
  <p>{{selected}}</p>
  <!-- 选择列表动态选项 -->
  <select v-model="selected">
    <option v-for="todo in options" value="todo.value">{{todo.text}}</option>
  </select>
  <p>{{selected}}</p>
  <!-- 修饰符 -->
  <input type="number" v-model.lazy="age">
</div>
</template>
<script>
new Vue({
  el: '#app',
  data: {
    array: [],
    selected: null,
    options: [
      {value: 1, text: 'A'},
      {value: 2, text: 'B'},
      {value: 3, text: 'C'}
    ],
    age: null
  }
})
</script>
```

## 八、参考教程

---

- [vue官网](https://cn.vuejs.org/v2/guide/)
