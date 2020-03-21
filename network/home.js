import request from "./request"

export function getMultiData(){
    return request({
      url:"/home/multidata"
    })
}

export function getGoodData(page,type){
  
  return request({
    url:"/home/data",
    data:{
        page,type
    }
  })
}