//app.js
var event = require('lib/event.js')
App({
  onLaunch: function() {
    //添加事件
    event(this)
  },

  getUserInfo: function(cb) {
  },

  globalData: {
    userInfo: null
  }
})
