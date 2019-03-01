import React , {Component} from "react"

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

    return React.forwardRef((props,ref)=>{
        return <NewWraped {...props} forwardRef={ref} />
    })

}

const HHH = HOC(Button);

export  default  HHH
