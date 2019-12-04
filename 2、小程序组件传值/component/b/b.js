// component/b/b.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //触发change事件向A传值
    change: function () {
        this.triggerEvent('thisVar', { thisVarValue: "值：子传父，成功" });
    }
  }
})
