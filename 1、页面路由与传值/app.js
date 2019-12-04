//app.js
App({
  onLaunch(options) {//小程序初始化完成时触发,全局只触发一次。
    console.log("初始化完成",options)
  },
  onShow(options) {//小程序启动，或从后台进入前台显示时触发。
    console.log("显示",options)
  },
  onHide() {//小程序从前台进入后台时触发。
    console.log("已切换到后台")
  },
  onError(msg) {//小程序发生脚本错误或 API 调用报错时触发。
    console.log(msg)
  },  
  globalData: 'I am global data；我是全局数据',
  globalData2: '我是全局数据',
})