//React.children.map(children,function[(thisArg)])

//React.Children.forEach(children,function[(thisArg)])

//React.Children.count(children) 返回children的组件总数

// React.Children.only(children) 验证是否只有一个孩子，并返回它

//React.Children.toArray(children) key值赋予  可以对children重新排序

//React.Fragment 当组件要返回多个元素时，但不想创造一个额外的DOM元素，但组件需要返回个包裹元素，我们可以用<></>

//React.createRef 创造一个ref绑定到元素上

//React.forwardRef 创建一个组件，组件可接受两个参数，props和ref , ref将传递给子组件，实现将ref通过组件传递，
//使用场景:1,ref通过组件传递给后代 2.HOC高阶组件

//React.lazy 动态加载组件 减少包的大小 需要在React.Suspense下 尚未实现
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
//
// function MyComponent() {
//     return (
//         // Displays <Spinner> until OtherComponent loads
//         <React.Suspense fallback={<Spinner />}>
//             <div>
//                 <OtherComponent />
//             </div>
//         </React.Suspense>
//     );
// }

import React , {Component} from "react"

export default function ReactComponent(props) {
    // console.log(React.Children.toArray(props.children[1].props.children[0]));
    return(
        <>
            {React.Children.toArray(props.children[1].props.children).map((val,index)=>{
                console.log(val)
                // val.key = index;
                return val
            })}
        </>
    )
}