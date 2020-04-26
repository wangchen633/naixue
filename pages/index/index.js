//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false
  },
  waim:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  xinw:function(){
    wx.navigateTo({
      url: '../xinw/xinw'
    })
  },
  shang: function () {
    wx.switchTab({
      url: '../home/home'
    })
  },
  onClickShow:function() {
    this.setData({
      show:true
    })
    console.log(1)
  },

  onClickHide() {
    this.setData({ show: false });
  },

  onLoad: function () {
  
  },

})
