// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xingm:'',
    dianh:'',
    dizhi:'',
    menp:''
  },
xin:function(){
  wx.navigateTo({
    url: '../xin/xin',
  })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     xingm: wx.getStorageSync('xingm'),
     dianh: wx.getStorageSync('dianh'),
     dizhi: wx.getStorageSync('dizhi'),
     menp: wx.getStorageSync('menpai'),
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})