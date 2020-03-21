
// < !-- < text ></text > 相当于span 标签 行内元素  属性：selectable 是否可以被选中  space 空格大小 nbsp emsp ensp  decode 是否解码文本  是否解码html & gt; -->


// < !-- < button ></button > 块级元素  属性 size ：mini 就变成了行内块级元素   type primary default warn disable plain（镂空） loading hover - class 按压高亮css  open - type: getuserInfo-- >


// < !--view  类似于div 块级元素  属性：hover - class 按压时状态  hover - stay - time 按压结束后停留时间  hover - start - time 按压后多长时间变成点击态   hover - stop - propagation 阻止 祖先元素出现点击态 冒泡-- >


// < !--image 类似img 行内块级元素 有默认大小 无论哪种机器 320 240   属性: src bindload 加载完成触发  mode  图像像是 lazy - load  懒加载 show - menu - by - longpress  长按识别小程序-- >

// < !--input  类似input  属性 type 键盘类型  placeHolder  confirm - type 是键盘有下家文-- >

// < !-- < scroll - view ></scroll - view > 属性 scroll - x 横向滚动  scroll - y 纵向滚动-- >

// < !--在iphone6屏幕上 1rpx = 0.5px-- >
// < !-- @import 'path' wxss 导入-- >
// < !--微信有一套样式库 叫webUi 可以在GitHub上找-- >
// < !--wx: if wx: elseif wx:else -->
// < !--wx: for= "{{[]}}" 遍历数组  wx: for= "字符串"  wx：for= "{{10}}" 遍历数字  给 遍历的值换名字  wx: for-item= "something"  wx: for-index= "something"   wx: for 的是由如果在循环的数组内插入值是 wx：key 会提高性能-- >

// < !--当需要包裹某些元素 而实际无意义的view  可以用block来代替 增加新能-- >

// < !--这个模板设置代码 在不使用时是不会显示的   可以卸载另外的文件 用 <import src ="" >（不能循环导入）导入 < include src > 引入（不能导入template wxs，可以递归）  代码替换-- >

// < !-- < template name = "name" >
//   <button>{{ title }}</button>
//   <view>{{ content }}</view>
// </template > -->

// < !--template 的使用  is 表示使用哪个模板 和name 关联  data 是传入数据-- >
// < !-- < template is = "name" data = "{{title:'hahaha',content:'我爱你你爱我么'}}" /> -->



// < !--WXS 不能调用其他js文件的内容 和wx api  不能作为事件回调  主要是在mustach 语法中使用
// 写法和html 里的script 标签 贼像  用法主要是vue中的过滤器
//   < wxs module = "info" >
//     ES5的语法
// module.export = { key: value }
// </wxs >
//   使用时 info.key
// -->


//  < !--事件 看文档啊  给事件传值 data - key="{{index}}" bind 会冒泡 catch 阻止冒泡-- >


// 自定义组件 默认不会互相影响 但是可以在组件JS中 添加options 对象 里面有个属性是shareIsolation "apply-share"或者 share

// 组件不但可以传组件属性 还可以传 extendClasses 扩展类