// pages/movie_more/movie_more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_list:[]
  },

  //自定义一个方法,获取数据库的数据
  selectByType() {
    wx.request({
      url: 'http://localhost:9093/more?',
      success: (result) => {
        // console.log(1111);
        // console.log(result.data);
        this.setData({
          movie_list: result.data
        })
      }
    })
  },
  //封装一个自定义方法，用于调用后端接口地址，请求获取movie_list的数据
  // myMovieListRequest() {
  //   wx.request({
  //     url: 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%90%88%E5%B7%9D&ci=732&channelId=4',
  //     success: (res) => {
  //       //  console.log(res)
  //       var hot = res.data.data.hot
  //       console.log(hot)
  //       this.setData({
  //         movie_list:hot
  //       })
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.selectByType(),
    movie_home= require("../movie_home/movie_home.js"); //这里注意文件层级
    this.setData({
      movie_comedy_list: movie_home.selectByType() // 最后在这里生效
     })
  },
 //点击电影所在位置， 可以查看该电影的详情 跳转页面并携带电影id
 tomore_details(e){
  console.log(e.currentTarget.dataset.id);
  wx.navigateTo({
    url: '/pages/movie_details/movie_details?id='+e.currentTarget.dataset.id+
    '&title='+e.currentTarget.dataset.title,
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})