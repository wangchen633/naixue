// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    flag: 0,
    currentTab: 0,
    bgwc: 'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/8YUQ4vKPKp.vxIKbDZcdtqzuyOPRCGOjDpBL5J5EfxU0DuYYceYFu4KrsCdDkYWdYTQ9cdnxYnG6xa2EQm17VQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5',
    rgwc: 'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/yCLjTthScCcjc0qcPSGYBvlEfDKyVhPW7eAcIjYhtYf6U16LHsbcyimoRSg22JFy3g5ZBjuKFFG2LMwawVLHNKH6cydO*..kKa5rc..d2ek!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5',
    price: '0.00',
    show: false,
    zj: '',
    show1: false,
    dj0: '',
    lists: '',
    lingshi: [
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587634857736&di=c8bcfa6f8a894d11bf74ddbe3281e25d&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2F9PKisz2v7LEYFTKiME-9xd9R_ED2paSUVIFZLjM_wr8ru7nMSCtlSj7iGU77jW6ujoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
        new: '奈雪草莓茶',
        price: '10.00',
        jia: '+',
        id: 1,
        num: 0
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587634857732&di=3a2bbf062f995d26cb9d291c80463583&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn19%2F96%2Fw2048h2048%2F20180607%2F1e43-hcscwwz8880092.jpg',
        new: '奈雪清茶',
        price: '20.00',
        jia: '+',
        id: 2,
        num: 0
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587635223787&di=4150763ba5228ed164d7eeec548f99e1&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FaQAAKBJHqd3nxf_JCxgS1Ekbu02XHr7ZhgUSqLK3LRsg4-GAUftD83UEScYCeK-UTYGVDmosZWTLal1WbWRW3A.jpg',
        new: '奈雪乌龙茶',
        price: '30.00',
        jia: '+',
        id: 3,
        num: 0
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587635541343&di=6dcc15831c9028ae476a0960f37841fb&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3526583986%2C2982055281%26fm%3D214%26gp%3D0.jpg',
        new: '奈雪情侣套餐',
        price: '40.00',
        jia: '+',
        id: 4,
        num: 0
      }
    ],
    lun:[
      {
        photo:'http://m.qpic.cn/psc?/V14P7yu60zfY6s/EhPRALW.5z3GNhe6Xfm9kvNAwUdLj8GTFL0sFQPOlNS0S6Oq6OwuP*nZyzEufyo8QOqBowdtzzF*BEfoZ6DtmA!!/mnull&bo=0wGqAAAAAAADB1o!&rf=photolist&t=5'
      },
      {
        photo:'http://m.qpic.cn/psc?/V14P7yu60zfY6s/EhPRALW.5z3GNhe6Xfm9koX0zP4SEqF1UCBVIMa7VZF7GjJzoaBJmpJ8btOs9VW5u85Al9XVEft1S5ky1IZJsQ!!/mnull&bo=0wGoAAAAAAADB1g!&rf=photolist&t=5'
      },
      {
        photo:'http://m.qpic.cn/psc?/V14P7yu60zfY6s/EhPRALW.5z3GNhe6Xfm9kg.SeWhsfc1fA2ZSCthwd0u8wel8kufIXTiEHbkYDh11fMnIkwOuIQaY1mhaOl.XLQ!!/mnull&bo=aAepAwAAAAADB.c!&rf=photolist&t=5'
      }
    ]
  },
  diz:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  onLoad:function(){
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
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      flag: id
    });
  },
  catchTouchMove: function (res) {
    return false
  },
  onClose1() {
    this.setData({ show1: false });
  },

  showPopup1() {
    this.setData({ show1: true });
  },
  onChange(event) {

    var sy = event.currentTarget.dataset.index

    this.data.lingshi[sy].num = event.detail
    // console.log(event)
    // console.log(this.data.lingshi)
    this.setData({
      lingshi: this.data.lingshi
    })
    // console.log(this.data.lingshi)
    this.pay()
    if (this.data.zj > 0) {
      this.setData({
        bgwc: 'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/yCLjTthScCcjc0qcPSGYBvlEfDKyVhPW7eAcIjYhtYf6U16LHsbcyimoRSg22JFy3g5ZBjuKFFG2LMwawVLHNKH6cydO*..kKa5rc..d2ek!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5'
      })
    } else if (this.data.zj == 0) {
      this.setData({
        bgwc: 'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/8YUQ4vKPKp.vxIKbDZcdtqzuyOPRCGOjDpBL5J5EfxU0DuYYceYFu4KrsCdDkYWdYTQ9cdnxYnG6xa2EQm17VQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5',
        zj: ''
      })
    }
    // console.log(this.data.lingshi);
  },
  pay: function () {
    var a = 0
    var b = 0
    for (var i in this.data.lingshi) {
      var zj = this.data.lingshi[i].num * this.data.lingshi[i].price
      b += this.data.lingshi[i].num
      a += zj
    }
    this.setData({
      zj: b,
      price: a
    })
  },
  qk: function () {
    for (var i in this.data.lingshi) {
      this.data.lingshi[i].num = 0
    }
    this.setData({
      lingshi: this.data.lingshi
    })
    this.pay()
    if (this.data.zj > 0) {
      this.setData({
        bgwc: 'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/yCLjTthScCcjc0qcPSGYBvlEfDKyVhPW7eAcIjYhtYf6U16LHsbcyimoRSg22JFy3g5ZBjuKFFG2LMwawVLHNKH6cydO*..kKa5rc..d2ek!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5'
      })
    } else if (this.data.zj == 0) {
      this.setData({
        bgwc: 'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/8YUQ4vKPKp.vxIKbDZcdtqzuyOPRCGOjDpBL5J5EfxU0DuYYceYFu4KrsCdDkYWdYTQ9cdnxYnG6xa2EQm17VQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5',
        zj: ''
      })
    }
  },
  stopTouchMove:function(){

  }
})