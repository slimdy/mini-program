//注册小程序app

App({
  globalData:{
    token:"",
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {  //这里虽然没写 但是options 也是会传的
    //一般获取用户信息
    const token  =  wx.getStorageInfoSync("token")
    if (token || token.length != 0){
      //已经存在token
      this.checkToken(token)

    }else{
      this.login()
    }
    //登录
    
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {  //这里会执行多次
    //options 里面就有下程序打开的场景值 用于判断
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  checkToken(token){
      //验证token
  },
  login(){
    wx.login({
      success: (res)=>{
        // success
        const code = res.code
        console.log(code) 
        //发送code 到服务器  服务器 带着appid  code  secret 去微信那取openid 并生成token
        const token = "123456789"
        this.globalData.token = token
        wx.setStorageSync('token', token)
      },
      fail: (err)=> {
        // fail
      },
      complete: ()=> {
        // complete
      }
    })
  }
})
