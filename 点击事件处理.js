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