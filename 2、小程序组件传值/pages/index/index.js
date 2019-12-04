//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //事件处理函数
 
  onLoad: function () {
    
  },
  
  getThisVarValue:function(e){//组件B传值给父级index
    console.log(e.detail.thisVarValue);
    this.setData({
      thisVarValue:e.detail.thisVarValue
    })
  }
})
