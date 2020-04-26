// pages/xinxi/xinxi.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    col: '#a6c393',
    coln: '',
    nic:''
  },

  // dian:function(res){
  //  console.log(res.currentTarget.dataset.index)
  //   let index = res.currentTarget.dataset.index
  //   let yans = 'xingb[' + index +'].yan'
  //   let beicol = 'xingb[' + index + '].bacol'
  //   if(index == 0){
  //     this.setData({
  //       [yans]:'white',
  //       [beicol]: 'lawngreen',
  //     })
  //   }
  //    else if(index == 1){
  //     this.setData({
  //       [yans]: 'white',
  //       [beicol]: 'lawngreen',
  //     })
  //   }
  // },

  wod: function () {
    wx.switchTab({
      url: '../new/new'
    })
  },
  xian: function () {
   
    var that = this
    if (that.data.col == "#a6c393") {
      that.setData({
        coln: "",
        col: "#a6c393"
      })
    } else {
      that.setData({
        coln: "",
        col: "#a6c393"
      })
    }
  },
  nv: function () {
    var that = this
    if (that.data.coln == "") {
      that.setData({
        col: "",
        coln: "#a6c393"
      })
    } else {
      that.setData({
        coln: "",
        col: "#a6c393"
      })
    }
  },
  nic: function (res) {
    // console.log(res.detail.value)
    wx.setStorageSync('nic', res.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nic: wx.getStorageSync('nic')
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