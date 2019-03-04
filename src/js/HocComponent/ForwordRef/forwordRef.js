import React , {Component} from "react"
import ReactDOM from "react-dom";

class Button extends Component{
    render(){
        return (
            <button ref={this.props.refs}>1232313</button>
        )
    }
}

function HOC(Wraped) {
    class NewWraped extends Component{
        render(){
            const {forwardRef , ...rest} = this.props;
            return (
                 <Wraped refs={forwardRef} {...rest}/>
            )
        }
    }

    const Re =  React.forwardRef((props,ref)=>{
        return <NewWraped {...props} forwardRef={ref} />
    });

    return Re

}

const HHH = HOC(Button);

export  default  HHH
//
// ReactDOM.render(<HHH
//     ref={(dom) => {
//         console.log(dom);
//     }}/>, document.getElementById('root'));