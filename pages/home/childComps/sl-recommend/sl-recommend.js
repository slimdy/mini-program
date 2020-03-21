// pages/home/childComps/sl-recommend/sl-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      recommends:{
        type:Array,
        default:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      flag:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(){
      if (!this.data.flag){
        this.data.flag = true // have not to change the data by using setData,course we don't need to refresh the page
        this.triggerEvent("imageLoad",{},{})
      }

    }
  }
})
