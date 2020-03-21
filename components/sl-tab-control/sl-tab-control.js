// components/sl-tab-control/sl-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("titleClick",{index},{})
    }

  },
  lifetimes:{ // 组件声明周期  还有个组件所在页面声明周期  pagelifetimes

  },
  
})

