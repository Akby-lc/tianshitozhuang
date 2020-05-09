// pages/shopping/shopping.js
const { getGoodsList, addGoodsFav, getGoodsCate }=require('../../http/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[]
  },
  delItem(e){
    let key = e.currentTarget.dataset.key
    wx.request({
      url: `https://api.it120.cc/lak/shopping-cart/remove?token=aaddab24-3288-49bb-b118-ab8b1113125a&key=${key}`,
      method:'POST',
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log('删除',res)
        this.setData({
          items:res.data.data.items
        })
      }
    })
  },
  // getApi() {
  //   addGoodsFav().then(res=>{
  //     console.log('终于等到你',res)
  //   });

  // },
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
    wx.request({
      url:"https://api.it120.cc/lak/shopping-cart/info?token=aaddab24-3288-49bb-b118-ab8b1113125a",
      method:'GET',
      header:{
        'content-type':'application/json'
      },
      complete:(res)=>{
        console.log('购物车',res.data.data.items)
        this.setData({
          items:res.data.data.items
        })
      },
    })
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