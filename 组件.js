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