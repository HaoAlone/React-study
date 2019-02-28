 import React , {Component} from "react"
import {fetchRequest} from "./base";

 class FetchTest extends Component{
     constructor(props){
         super(props);
         this.state = {
             test : [{num:1}]
         }
     }
    click = ()=> {
        // fetchRequest("/user","GET").then(res=>console.log(res))
        // let newArr = [];
        // let compareArr = [];
        // arr.map(val=>{
        //     if(compareArr.indexOf(val.isArr) < 0){
        //         console.log(compareArr.indexOf(val.isArr))
        //         compareArr.push(val.isArr)
        //         newArr.push(val)
        //     }
        // })
        // console.log(newArr)
        let {test} = this.state;
        let a = test;
        a.push({fas:123})
        this.setState({
            test : a
        })
    };


     render(){
         return(
             <div>
                 <button onClick={this.click}>请求</button>
             </div>
         )
     }
 }

 const arr = [
     {isArr:"1"},
     {isArr:"1"},
     {isArr:"1"},
     {isArr:"1"},
     {isArr:"2"},
     {isArr:"2"},
     {isArr:"2"},
     {isArr:"2"},
     {isArr:"3"},
     {isArr:"3"},
     {isArr:"3"},
     {isArr:"4"},
 ]

 export default FetchTest