// pages/movie_search/movie_search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_class_list:[{
      class_img:"https://img1.doubanio.com/dae/frodo/img_handler/chart_cover/ECYA5PA2A/round_rec",
      class_type:"一周口碑电影",
      class_attention:"256941人关注",
    },
    {
      class_img:"https://img1.doubanio.com/dae/frodo/img_handler/chart_cover/ECYA5PA2A/round_rec",
      class_type:"一周口碑电影",
      class_attention:"256941人关注",
    },
    {
      class_img:"https://img1.doubanio.com/dae/frodo/img_handler/chart_cover/ECYA5PA2A/round_rec",
      class_type:"一周口碑电影",
      class_attention:"256941人关注",
    },
    {
      class_img:"https://img1.doubanio.com/dae/frodo/img_handler/chart_cover/ECYA5PA2A/round_rec",
      class_type:"一周口碑电影",
      class_attention:"256941人关注",
    },
    {
      class_img:"https://img1.doubanio.com/dae/frodo/img_handler/chart_cover/ECYA5PA2A/round_rec",
      class_type:"一周口碑电影",
      class_attention:"256941人关注",
    },
    {
      class_img:"https://img1.doubanio.com/dae/frodo/img_handler/chart_cover/ECYA5PA2A/round_rec",
      class_type:"一周口碑电影",
      class_attention:"256941人关注",
    }
  ],
  inputVal:"",
  movie_select_list:[]
  },
  

  //自定义一个方法,res获取数据库的数据
  selectByTitle(res){
    console.log(res);
    wx.request({
      url: 'http://localhost:9093/selectByTitle?inputVal='+res,
      success:(result)=>{
        console.log('查询功能');
        console.log(result.data);
        this.setData({
          movie_select_list: result.data
        })
      }
    })
  },
  // 自定义方法， 输入数据时打出来
  myinput(e){
    let res =e.detail.value;
    console.log(res);
    this.setData({
      inputVal:res
    })
    this.selectByTitle(res)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
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