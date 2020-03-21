// const baseUrl = "http://123.207.32.32:8000/api/wh"
const baseUrl = "http://106.54.54.237:8000/api/wh"

export default function request(options){
      return new Promise((resolve,reject)=>{
        wx.request({
          url: baseUrl + options.url,
          method: options.method || "GET",
          data: options.data || {},
          success: resolve,
          fail: reject
        })
      })
}