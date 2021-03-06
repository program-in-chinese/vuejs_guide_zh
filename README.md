知乎专栏文章: [中文代码示例之Vuejs入门教程(一)](https://zhuanlan.zhihu.com/p/30917346)

所有演示都在本地测试通过. 有任何问题/批评请新建Issue.

### 声明式渲染

```
    <div id="元素id">
      <p>{{ 问候 }}</p>
    </div>
```
```
var 应用1 = new Vue({
  el: '#元素id',
  data: {
    问候: '吃了么?'
  }
})
```
打开你的浏览器的控制台 (就在这个页面打开)，并修改 `应用1.问候`，你将看到上例相应地更新。

```
    <div id="元素id2">
      <span v-bind:title="动态绑定信息">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
```
```
var 应用2 = new Vue({
  el: '#元素id2',
  data: {
    动态绑定信息: '页面加载于 ' + new Date().toLocaleString()
  }
})
```
再次打开浏览器的 JavaScript 控制台输入 `应用2.动态绑定信息 = '新消息'`，就会再一次看到这个绑定了 title 属性的 HTML 已经进行了更新

### 条件与循环

```
    <div id="元素id3">
      <p v-if="看得到">现在你看到我了</p>
    </div>
```
```
var 应用3 = new Vue({
  el: '#元素id3',
  data: {
    看得到: true
  }
})
```

继续在控制台设置 `应用3.看得到 = false`，你会发现“现在你看到我了”消失了。

```
    <div id="元素id4">
      <ol>
        <li v-for="任务 in 任务表">
          {{ 任务.内容 }}
        </li>
      </ol>
    </div>
```
```
var 应用4 = new Vue({
  el: '#元素id4',
  data: {
    任务表: [
      { 内容: '学习 JavaScript' },
      { 内容: '学习 Vue' },
      { 内容: '整个牛项目' }
    ]
  }
})
```
警告如下, 但列表仍然显示. 已经在Vue项目新建[issue](https://github.com/vuejs/vue/issues/6971)
```
[Vue warn]: Error compiling template:

<div id="元素id4">
      <ol>
        <li v-for="任务 in 任务表">
          {{ 任务.内容 }}
        </li>
      </ol>
    </div>

- invalid v-for alias "任务" in expression: v-for="任务 in 任务表"


(found in <Root>)
```
在控制台里，输入 应用4.任务表.push({ 内容: '新项目' })，你会发现列表中添加了一个新项。

### 处理用户输入
```
    <div id="元素id5">
      <p>{{ 问好 }}</p>
      <button @click="倒着说()">@click有效</button>
      <button v-on:click="倒着说()">v-on:click有效</button>
    </div>
```
```
var 应用5 = new Vue({
  el: '#元素id5',
  data: {
    问好: '你好'
  },
  methods: {
    倒着说: function () {
      this.问好 = this.问好.split('').reverse().join('')
    }
  }
})
```
`v-on:click`支持中文方法名, 但需要`()`. 为此在Vue项目新建[issue](https://github.com/vuejs/vue/issues/6975), 经社区建议得知并检验, 另一种方式`@click`也支持中文命名, 同样需要`()`.

```
    <div id="元素id6">
      <p>{{ 问好 }}</p>
      <input v-model="问好">
    </div>
```
```
var 应用6 = new Vue({
  el: '#元素id6',
  data: {
    问好: '你好!'
  }
})
```

### 组件化应用构建

```
    <div id="元素id7">
      <ol>
        <todo-item
          v-for="物品 in 购物单"
          v-bind:待购="物品"
          v-bind:key="物品.序号">
        </todo-item>
      </ol>
    </div>
```
```
Vue.component('todo-item', {
  props: ['待购'],
  template: '<li>{{ 待购.名称 }}</li>'
})
var 应用7 = new Vue({
  el: '#元素id7',
  data: {
    购物单: [
      { 序号: 0, 名称: '蔬菜' },
      { 序号: 1, 名称: '肉' },
      { 序号: 2, 名称: '随便啥' }
    ]
  }
})
```
这里的HTML标签`todo-item`和其他标签(如div, ol)一样, 不支持中文命名.
