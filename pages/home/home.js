// pages/home/home.js
import {getMultiData,getGoodData} from "../../network/home"
//注册页面 声明周期 事件处理 初始化数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:["流行","新款","精选"],
    banners:[],
    recommends:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType: "pop"

  },
  /**
   *  事件触发
   */
  
  titleClick(event){
    // const cpn = this.selectComponent("class/id") 父组件修改子组件的data
    // cpn.setData({})
    console.log();
    const currentType = Object.keys(this.data.goods)[event.detail.index]
    this.setData({
      currentType
    })

  },
  onReachBottom(){
    console.log("上拉加载更多")
    // this._getGoodData(this.data.currentType)
  },

  /**
   * 
   * 网络请求
   */
  _getAllData(){
    //banner recommend
  
    getMultiData().then(res=>{
      const data = res.data.data
      const banners = data.banner.list
      const recommends  =data.recommend.list
      this.setData({
        banners,
        recommends
      })
    }).catch(err=>console.log(err))
  
    Object.getOwnPropertyNames(this.data.goods).forEach(key=>{
      this._getGoodData(key)
    })
    

  },
  _getGoodData(key){
    let page = this.data.goods[key].page+1
      
      getGoodData(page,key).then(res=>{
        // 该对象中的某个属性
        const oldList = this.data.goods[key].list
        oldList.push(...res.data.data.list)
        const typeKey  = 'goods.'+ key +'.list'
        const pageKey  = `goods.${key}.page`
        console.log(typeKey,pageKey,oldList,page)
        this.setData({
          [typeKey]: oldList,
          [pageKey]:page
        })

      }).catch(err=>console.log(err))

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // 执行一次
    //options里有其他页面传递的数据
    this._getAllData()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { //数据传送到页面时执行


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { //页面显示  所以第一次 会先执行onshow 然后在执行onready
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载  //页面销毁
   */
  onUnload: function () {
    //页面销毁时 给别的页面传送数据
    // 获得当前所有页面的对象数组
    var curPages =  getCurrentPages();
    

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