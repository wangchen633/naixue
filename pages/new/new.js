// pages/new/new.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    nic:'',
    jifen:[
      {
        shu:'3',
        mz:'奈雪劵'
      },
      {
        shu: '1',
        mz: '积分商城'
      },
      {
        shu: '0',
        mz: '余额'
      },
      {
        shu: '0',
        mz: '礼品卡'
      }
    ],
    arr:[
      {
        img:'/image/jf.png',
        text:'积分签到',
        tiao:'jifen'
      },
      {
        img: '/image/xin.png',
        text: '送她心意',
        tiao: ''
      },
      {
        img: '/image/lw.png',
        text: '奈雪礼物',
        tiao: ''
      },
      {
        img: '/image/sc.png',
        text: '奈雪商城',
        tiao: ''
      }, {
        img: '/image/dd.png',
        text: '我的订单',
        tiao: ''
      }, {
        img: '/image/sh.png',
        text: '收货地址',
        tiao: ''
      }, {
        img: '/image/kf.png',
        text: '联系客服',
        tiao: ''
      }, {
        img: '/image/fw.png',
        text: '更多服务',
        tiao: ''
      }
    ]
  },
  xinx:function(){
    wx.navigateTo({
      url: '../xinxi/xinxi',
    })
  },
  jifen: function () {
    wx.navigateTo({
      url: '../jifen/jifen',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.nic)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.setData({
      nic: wx.getStorageSync('nic')
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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