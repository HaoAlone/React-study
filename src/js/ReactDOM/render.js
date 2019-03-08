// ReactDOM.render(element, container[, callback])
//
// 注意:
//
//     ReactDOM.render()控制你传进容器节点里的内容。当第一次被调用时，内部存在的任何DOM元素都会被替换掉。之后的调用会使用React的DOM差分算法进行高效的更新。
//
// ReactDOM.render()不会修改容器节点（只修改容器的子代们）。你可以在不覆盖已有子节点的情况下添加一个组件到已有的DOM节点中去。
//
// ReactDOM.render()目前会返回一个引用，指向ReactComponent的根实例。但是这个返回值是历史遗留的，应该避免使用。因为未来版本的React可能会在某些情况下进行异步渲染。如果你真的需要一个指向ReactComponent的根实例的引用，推荐的方法是添加一个callback ref到根元素上。
//
// Using ReactDOM.render()to hydrate a server-rendered container is deprecated and will be removed in React 17. Use hydrate()instead.