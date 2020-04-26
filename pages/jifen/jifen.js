// pages/jifen/jifen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newSignBtnState: false,  //按钮签到状态
    myToday: '',           //周几
    newSignNum: 0,      //签到天数
    newSignIntegral: 0,  //签到积分
    //签到数组
    isNewSignedArr: [
      {
        "day": "一",
        "isSigned": false
      },
      {
        "day": "二",
        "isSigned": false
      },
      {
        "day": "三",
        "isSigned": false
      },
      {
        "day": "四",
        "isSigned": false
      },
      {
        "day": "五",
        "isSigned": false
      },
      {
        "day": "六",
        "isSigned": false
      },
      {
        "day": "日",
        "isSigned": false
      }
    ],
  },

  //-------点击签到---------
  bindSignFn(e) {
    var that = this,
      newSignNum = that.data.newSignNum,
      today = that.data.myToday;
    const arr = [],
      newSignArr = [...arr, ...that.data.isNewSignedArr];
    //
    today = today - 1 > 0 ? today - 1 : 6;
    newSignArr[today].isSigned = true;

    //当前积分
    newSignNum++;
    var curFen = that.data.newSignIntegral + 1;

    that.setData({
      newSignBtnState: true,
      newSignNum: newSignNum,
      newSignIntegral: curFen,
      isNewSignedArr: newSignArr,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this,
      myDate = new Date(),
      myToday = myDate.getDay();  //周几   0 1 2 3 4 5 6
    that.setData({
      myToday: myToday
    })
   
  },
 
})