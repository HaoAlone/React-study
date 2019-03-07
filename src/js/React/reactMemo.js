// 高阶组件
//适用于 当props相同，渲染出来的一样,他对props 对象进行浅比较，如果没有变化，使用上一次的渲染结果。也就是说有记忆存储功能
// 如果想控制数据比较过程，可以传一个函数作为第二个参数来决定是否重绘

import React from "react"
function com(props){
    return <div>component</div>
}

function compareFn(prevProps,nextProps) {

}
export default React.memo(com,compareFn);