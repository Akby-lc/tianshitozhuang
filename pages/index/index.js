//index.js


Page({
  data: {
    splbList:[],// 获取商品类别
    banners:[],// 获取banner列表
    recommend:[],//获取推荐
    ptList:[],//获取拼团
    lbList:[],//商品类别
  },

  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function (e) {
    // 获取banner列表
    wx.request({
      url: 'https://api.it120.cc/lak/banner/list?token=aaddab24-3288-49bb-b118-ab8b1113125a',
      method:"GET",
      header:{
        'content-type':'application/json'
      },
      complete:(res)=>{
        console.log("banner列表：",res.data)
        if(res.statusCode===200){
          let temp=[]
          res.data.data.forEach(e => {
             if(e.type==='index'){
              temp.push(e)
             }
             this.setData({
               banners:temp
             })
          })
        }
      }
    })
    // 获取商品类别
    wx.request({
      url: 'https://api.it120.cc/lak/shop/goods/category/all',
      method:"GET",
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log("商品类别",res.data)
        if(res.statusCode===200){
          this.setData({
            splbList:res.data.data
          })
        }
      }
    })
    // 获取推荐
    wx.request({
      url: 'https://api.it120.cc/lak/shop/goods/list?recommendStatus=1',
      method:"GET",
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log("推荐",res.data)
        this.setData({
          recommend:res.data.data
        })
      }
    })
    // 获取拼团
    wx.request({
      url: 'https://api.it120.cc/lak/shop/goods/list?pingtuan=true',
      method:"GET",
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log("拼团",res.data)
        this.setData({
          ptList:res.data.data
        })
      }
    })
    // 获取商品列表
    wx.request({
      url: 'https://api.it120.cc/lak/shop/goods/list',
      method:"GET",
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log("商品列表",res.data)
        this.setData({
          lbList:res.data.data
        })
      }
    })

  }
  // 
  
})
