import React, {Component} from "react"
import ReactDOM from "react-dom";

function HOCProps(WrappedComponent) {
    class HOCComponent extends React.Component {
        constructor(props) {
            super(props);
            this.setWrappedInstance = this.setWrappedInstance.bind(this);
        }

        getWrappedInstance = () => {
            //外层实现实例访问
            return this.wrappedInstance;
        };

        // 绑定ref
        setWrappedInstance(ref) {
            this.wrappedInstance = ref;
        }

        render() {
            console.log(this.props)
            return <WrappedComponent refs={this.setWrappedInstance} {...this.props} />;
        }
    }

    return HOCComponent;
}

class Wrap extends Component {
    render() {
        return (
            <input type="text" ref={this.props.refs} onChange={(e) => {
                console.log(e.target)
            }}/>
        )
    }
}


class Wrapped extends Component {
    render() {
        return (
            <button type="text" ref={this.props.refs} onChange={(e) => {
                console.log(e.target)
            }}/>
        )
    }
}


// ReactDOM.render(<App1
//     ref={(dom) => {
//         // 只能获取到 HOCComponent
//         console.log(dom);
//         // 通过中转后可以获取到 WrappedComponent
//         console.log(dom.getWrappedInstance());
//     }}
//     a={"123"}/>, document.getElementById('root'));

const App1 = HOCProps(Wrapped);

export default App1


