// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conIndex:0,
    splbList:[],// 商品类别
    lbList:[] //商品列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
      // 获取商品类别
    wx.request({
      url: 'https://api.it120.cc/lak/shop/goods/category/all',
      method:"GET",
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log("商品类别",res)
        if(res.statusCode===200){
          this.setData({
            splbList:res.data.data
          })
        }
      }
    })

    wx.request({
      url: 'https://api.it120.cc/lak/shop/goods/list?categoryId=123577',
      method:"GET",
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log("商品列表",res.data.data)
        this.setData({
          lbList:res.data.data,
        })
      }
    })
  },

  tap(e){
    let i = e.currentTarget.dataset.index
    let id =this.data.splbList[i].id
        // 获取商品列表
        wx.request({
          url: `https://api.it120.cc/lak/shop/goods/list?categoryId=${id}`,
          method:"GET",
          header:{
            'content-type':'application/json'
          },
          success:(res)=>{
            console.log("商品列表",res)
            this.setData({
              lbList:res.data.data,
              conIndex:i
            })
          }
        })
  },
  // 点击进入详情
  getInto(e){
    let i = e.currentTarget.dataset.index
    let id =this.data.lbList[i].id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
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