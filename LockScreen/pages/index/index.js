//index.js
var Lock = require('../../lib/lock.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    title:'绘制解锁图案',
    userInfo: {}
  },
  onLoad: function () {
    this.lock = new Lock(this)
  },
  onTitleChanged:function(newTitle){
    this.setData({
      title:newTitle
    })
  },
  //事件处理函数
  resetPwd: function () {
    this.lock.updatePassword();
  },
  onReachBottom:function(){

  }
})
