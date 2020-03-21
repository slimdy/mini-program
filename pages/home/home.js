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
    currentType: "pop",
    isShow:false,
    isFixed:false,
    tabControlTop:0

  },
  /**
   *  事件触发
   */
  
  titleClick(event){
    // const cpn = this.selectComponent("class/id") 父组件修改子组件的data
    // cpn.setData({})
    const currentType = Object.keys(this.data.goods)[event.detail.index]
    this.setData({
      currentType
    })
    console.log(event)
    
    switch(event.currentTarget.id){
      case "tab-control":
        this.selectComponent("#tab-control1").setData({
          currentIndex: event.detail.index
        })
        break
      case "tab-control1":
        this.selectComponent("#tab-control").setData({
          currentIndex: event.detail.index
        })
        break
      
    }

    // let id_values = [""]
    // let _id = event.currentTarget.id

    //

  },
  backtop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration:500
    })
  },

  imageLoad(){
    
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect=> {
      // rect.id      // 节点的ID
      // rect.dataset // 节点的dataset
      // rect.left    // 节点的左边界坐标
      // rect.right   // 节点的右边界坐标
      // rect.top     // 节点的上边界坐标
      // rect.bottom  // 节点的下边界坐标
      // rect.width   // 节点的宽度
      // rect.height  // 节点的高度
      this.setData({
        tabControlTop:rect.top
      })
    }).exec()
  },
  onReachBottom(){
    console.log("上拉加载更多")
    this._getGoodData(this.data.currentType)
  },
  onPageScroll: function (e) {
    //console.log(e)
    let scrollTop = e.scrollTop
    if (scrollTop < this.data.tabControlTop && this.data.isShow){
     
      let isShow = false
      this.setData({
        isShow
      })
    }
    if (scrollTop >= this.data.tabControlTop && !this.data.isShow){
      let isShow = true
      this.setData({
        isShow
      })
    }

    //tabcontrol sticky
    if(scrollTop >= this.data.tabControlTop && !this.data.isFixed){
   
      this.setData({
        isFixed: !this.data.isFixed
      })
    }

    if (scrollTop < this.data.tabControlTop && this.data.isFixed) {

      this.setData({
        isFixed: !this.data.isFixed
      })
    }

   
  },

  /**
   * 
   * 网络请求
   */
  _getAllData(){
    //banner recommend

  
    const promise_list = [getMultiData()]
    const args = []
  
    Object.getOwnPropertyNames(this.data.goods).forEach(key=>{
      let page = this.data.goods[key].page + 1
      promise_list.push(getGoodData(page, key))
      args.push({page,key})
    })
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    console
    Promise.all(promise_list).then(values=> {
      console.log(values)
      const data = values[0].data.data
      const banners = data.banner.list
      const recommends = data.recommend.list
      this.setData({
        banners,
        recommends
      })
      console.log("number1 ok")
      for(let index in args){
        index = parseInt(index)
        let key = args[index].key
        let page = args[index].page
        const res = values[index+1]
        const oldList = this.data.goods[key].list
        oldList.push(...res.data.data.list)
        const typeKey = 'goods.' + key + '.list'
        const pageKey = `goods.${key}.page`
        this.setData({
          [typeKey]: oldList,
          [pageKey]: page
        })
      }
      wx.hideLoading()


    }).catch(err => {
          wx.hideLoading()
          console.log(err)
        
    });

  },
  _getGoodData(key){
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      let page = this.data.goods[key].page+1
      
      getGoodData(page,key).then(res=>{
        // 该对象中的某个属性
        const oldList = this.data.goods[key].list
        oldList.push(...res.data.data.list)
        const typeKey  = 'goods.'+ key +'.list'
        const pageKey  = `goods.${key}.page`
        this.setData({
          [typeKey]: oldList,
          [pageKey]:page
        })
        wx.hideLoading()

      }).catch(err=>{
        console.log(err)
        wx.hideLoading()
      })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // 执行一次
    //options里有其他页面传递的数据
    wx.showLoading({
      mask:true,
      title: '加载中',
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})