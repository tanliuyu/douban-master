// pages/movie_details/movie_details.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    title:'',
    movie_details:[]
  },

//自定义一个方法,根据id获取数据库的数据
selectById(id,title){
  // console.log("id值："+this.data.id);
  // console.log("title名："+this.data.title);
  wx.request({
    url: 'http://localhost:9093/selectById?id=' + id,
    success:(result)=>{
      console.log(result)
      console.log(result.data);
      this.setData({
        movie_details:result.data
      })
      // console.log("电影名称："+ title)
      // 动态获取电影名称作为导航栏的标题名
      wx.setNavigationBarTitle({
        title: title
      })
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let id = options.id;
    let title = options.title;
    console.log("首页传过来的id值："+id);
    console.log("首页传过来的title名："+title);
    this.setData({
      id:id,
      title:title
    })
    this.selectById(id,title);
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