//index.js
//获取应用实例


Page({
  data: {

  },
  //1、
  gotoTabBar: function(e) {
    console.clear()
    wx.switchTab({
      url: '../logs/logs',
      success:function(res){
        console.log("成功",res)
      },
      fail: function (res) {
        console.error("失败",res)
      },
      complete: function (res) {
        console.log("结果",res)
      }
    })
  },
 //2、
  goReLaunch:function(){
    console.clear();
    wx.reLaunch({
      url: '../logs/logs?id=1'
    })
  },
 //3、
  goRedirectTo:function(){
    console.clear();
    wx.reLaunch({
      url: '../user/user?id=1'
    })
  },
 //4、
  goNavigateTo:function(){
    console.clear();
    wx.navigateTo({
      url: '../user/user?id=1',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        dataReturn: function (data) {
          console.log("index接收到：",data)
        },
  },
      success: function (res) {
        // 页面打开成功后，通过eventChannel（页面间事件通信通道）的emit（触发一个事件）向被打开页面传送数据（打开通道）
        res.eventChannel.emit('dataGet', { data: '数据给予' })
      }
    })
  },
 //5、
  goNavigateBack: function () {
    console.clear();
    //navigateBack，返回上一页
    wx.navigateBack({
      delta: 2 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
    })
  },
})