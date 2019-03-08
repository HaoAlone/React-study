import React , {Component} from "react"
import ReactDOM from "react-dom";
export default class Fd extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"qwer"
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        console.log(prevState)
        // const {type} = nextProps;
        // // 当传入的type发生变化的时候，更新state
        // if (type !== prevState.type) {
        //     return {
        //         type,
        //     };
        // }
        // // 否则，对于state不进行任何操作
        // return null;
    }

    static getSnapshotBeforeUpdate(prevProps, prevState) {

    }

    render() {
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}

// class PP extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             num:1
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 <button onClick={()=>this.setState({num:this.state.num+1})}>点击</button>
//                 <Fd  num={this.state.num}/>
//             </>
//
//         );
//     }
// }
//
// ReactDOM.render(
//     <PP />,
//     document.getElementById('root')
// );
