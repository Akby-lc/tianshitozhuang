//引入封装的reuest请求
const { request }=require('./require.js')

module.exports={
  /**
   * 封装商品列表方法
   */
  getGoodsList: ()=>{
    return request('/shop/goods/list','POST',{},true);
  },
  /**
   * 添加购物车
   */
  addGoodsFav:(goodsId,number,token)=>{

    return request('/shopping-cart/add', 'POST', { goodsId, number,token },true);

  },
  /**
   * 添加商品收藏
   */
  getGoodsCate:(goodsId,token)=>{
    return request('/shop/goods/fav/add','POST',{
      goodsId,token
    },true);

  },

}