//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  shang: function () {
    wx.switchTab({
      url: '../home/home'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
