// ReactDOM.findDOMNode(component)

// 如果这个组件已经被挂载到DOM中，函数会返回对应的浏览器中生成的DOM元素。当你需要从DOM中读取值时，比如表单的值，或者计算DOM元素的尺寸，这个函数会非常有用。 大多数情况下，你可以添加一个指向DOM节点的引用，从而完全避免使用findDOMNode这个函数.当render返回null或者false时, findDOMNode也返回null.
//
//     注意:
//
// findDOMNode是用于操作底层DOM节点的备用方案。在大部分情况下都不提倡使用这个方案，因为它破坏了组件的抽象化。
//
// findDOMNode只对挂载过的组件有效（也就是已经添加到DOM中去的组件）。如果你试图对一个未挂载的组件调用这个函数（比如在一个还未创建的组件的render()函数中中调用findDOMNode()），程序会抛出一个异常。
//
// findDOMNode 不能用于函数式的组件中。

