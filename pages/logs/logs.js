//logs.js


Page({
  data: {
    login:{},
    apiUserInfoMap:true
  },
  fav(e){
    wx.navigateTo({
      url: '/pages/fav/fav',
    })
  },
  goLogin(){
    this.setData({
      apiUserInfoMap:!this.data.apiUserInfoMap
    })
    wx.login({
      success:(res)=> {
        console.log('wx.login:',res)
        let {code}=res;
         wx.request({
           url: 'https://api.it120.cc/lak/user/wxapp/login',
           data:{
             code
           },
           header:{
             'content-type':' application/x-www-form-urlencoded'
           },
           method:'POST',
           success:(result)=> {
             console.log('登录返回',result.data.data);

              let token = result.data.data.token
              wx.request({
                url: `https://api.it120.cc/lak/user/detail?token=${token}`,
                header:{
                  'content-type':' application/x-www-form-urlencoded'
                },
                method:'GET',
                success:(resg)=> {
                  console.log('用户信息',resg)
                  this.setData({
                    login:resg.data.data.base
                  })
                }
              })
           }
         })

      }
    })
   
    
  },
  onLoad: function () {

  }
})
