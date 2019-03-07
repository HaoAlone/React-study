// React.PureComponent 比 React,Component 少了shouldComponentUpdate(),但内部实现了这个功能,比较props和state中的所有属性，以此判断是否重绘，
//但 只是浅比较，如果是个复杂数据，可能数据改变但不会引起重绘,如 {data:{a:1}}改变a的值并不会引起重绘，未避免这种现象可以使用immutable.js
import React from "react"

//源码
function is(x, y) {
    // x === y 缺陷 +0 ，0 ，-0 相等 ， NAN自身不相等
    //在x===y 为true 时候判断 x,y是否是+0，-0，0中的一个或者x,y是否是当中同一个
    //1 / x === 1 / y 当 x=y=0,-0,+0时,返回True
    //在x===y 为false时，判断x,y 是否是NAN
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare;
}
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }
//如果有一个对象变为null说明一定有变化
    //state props 一定是 object
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
        //都有这个key，并且值相等，如果这个值是对象，就比较引用的地址,也就是说嵌套在2层以上时,返回Ture，不做重绘
        if (!hasOwnProperty$1.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}


export default class Pure extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            a: {
                name: "vh",
            }
        }
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextState);
    //     if(nextState === this.state.a){
    //         return false
    //     }
    //     return true
    // }

    click = () => {
        const {a} = this.state;
        a.name = "ch";
        this.setState({
            a
        },()=>{
            console.log(this.state.a)
        })
    };

    render() {
        return (
            <>
                <div>{this.state.a.name}</div>
                <button onClick={this.click}>click</button>
            </>
        )
    }
}