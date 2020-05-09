// pages/details/details.js
var WxParse = require('../../wxParse/wxParse.js');
const { addGoodsFav,getGoodsCate }=require('../../http/api.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    goodsId:'',
    code:1
  },
  // 添加购物车
  add(){
    let goodsId = this.data.goodsId
    let token = "aaddab24-3288-49bb-b118-ab8b1113125a"
    let number ="1"
    addGoodsFav(goodsId,number,token).then(res=>{
      console.log('购物车',res)
    });
  },
  // 添加收藏
  goods(){
    let goodsId = this.data.goodsId
    let token = "aaddab24-3288-49bb-b118-ab8b1113125a"
    getGoodsCate(goodsId,token).then(res=>{
      console.log('收藏',res)
      this.setData({
        code:res.code
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接受详情页传过来的id
    let id = options.id
    this.setData({
      goodsId:id
    })
    let url =`https://api.it120.cc/lak/shop/goods/detail?token=aaddab24-3288-49bb-b118-ab8b1113125a&id=${id}`
    wx.request({
      url: url,
      method:'GET',
      header:{
        'content-type':'application/json'
      },
      complete:(res)=>{
        var that = this;
        WxParse.wxParse('article', 'html', res.data.data.content, this, 5);
        console.log("详情页数据",res.data.data)
        this.setData({
          list:res.data.data
        })
      },
    })

 

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function () {

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