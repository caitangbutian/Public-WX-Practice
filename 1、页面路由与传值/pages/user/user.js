// pages/user/user.js
var openChannel;// 通道变量

Page({
  onLoad: function (option) {
    console.log(option);//获取地址上的值
    openChannel = this.getOpenerEventChannel();//通过getOpenerEventChannel，获取打开的通道
    openChannel.on('dataGet', function (data) {// 用通道，监听dataGet，获取上一页面通过eventChannel传送到当前页面的数据
      console.log("user接收到：",data);
      openChannel.emit('dataReturn', { data: '数据自动返回' });//返回给上一个页面
    });
  },
  onUnload: function () {// 页面销毁时执行
    openChannel.emit('dataReturn', { data: '页面结束时再次数据返回' });//返回给上一个页面
  }

})