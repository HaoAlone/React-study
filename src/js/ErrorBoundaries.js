import React, {Component} from "react"

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            error:""
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        this.setState({
            isError: true,
            error:error
        })
    }

    render() {
        if(this.state.isError){
            return <h1>{this.state.error.toString()}</h1>
        }
        return this.props.children
    }
}

function Product(props){
        return  (
            <div >
               {props.age.toUpperCase()}
            </div>
        )

}

// 必须是类组件
class Tee extends Component{
    render(){
        return  (
            <ErrorBoundaries>
                <Product />
            </ErrorBoundaries>
        )
    }
}

export  {Tee}