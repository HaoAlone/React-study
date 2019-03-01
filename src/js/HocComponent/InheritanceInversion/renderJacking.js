import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "矮的",
            age: 12
        }
    }
    componentDidMount(){
        console.log("old componentWillMount")
    }
    render() {
        return (
            <div>
                <span>子组件</span>
            </div>
        )
    }
}

//HOC
function formCreate(WrappedComponent){
    return class RR extends WrappedComponent {
        constructor(props){
            super(props)
        }

        render() {
            const elementsTree = super.render()
            let newProps = {};
            if (elementsTree && elementsTree.type === 'input') {
                newProps = {value: 'may the force be with you'}
            }
            const props = Object.assign({}, elementsTree.props, newProps)
            const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)
            return newElementsTree
        }
    }
}

function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        componentDidMount() {
            console.log("new  componentWillMount");
            console.log(JSON.stringify(this.state));
            console.log(JSON.stringify(this.props));
        }
        render() {
            const elementTree = super.render();
            return elementTree
        }
    }
}

const Data = iiHOC(Login)
export default Data;