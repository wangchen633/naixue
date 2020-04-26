// pages/xin/xin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    col:'#a6c393',
    coln:'',
    username:'',
    address:''
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
di:function(){
  var _this = this;
  wx.chooseLocation({
    success: function (res) {
      // var name = res.name
      var address = res.address
      // var latitude = res.latitude
      // var longitude = res.longitude
      _this.setData({
        // name: name,
        address: address,
        // latitude: latitude,
        // longitude: longitude
      })
    }
  })
},
  onClickIcon:function(res){
    // console.log(res.detail.value)
    wx.setStorageSync('xingm', res.detail.value)
  },
  ontel:function(res){
    wx.setStorageSync('dianh', res.detail.value)
  },
  onadd:function(res){
    wx.setStorageSync('dizhi', res.detail.value)
  },
  onmen:function(res){
    wx.setStorageSync('menpai', res.detail.value)
  },
  baoc:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
xian:function(){
  var that = this
  if (that.data.col == "#a6c393"){
  that.setData({
    coln: "",
    col: "#a6c393"
  })  
}else{
  that.setData({
    coln: "",
    col: "#a6c393"
  })
}
},
nv:function(){
  var that = this
  if (that.data.coln == ""){
    that.setData({
      col: "",
      coln: "#a6c393"
    })
  }else{
    that.setData({
      coln: "",
      col: "#a6c393"
    }) 
  }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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