import React , {Component} from "react"

class TimeOut extends Component{

    time_out = (fetch_promise,timeout = 1000)=>{
        let abort_fn = null;

        let abort_promise = new Promise((resolve,reject)=>{
            abort_fn = function () {
                reject("time out ")
            }
        });

        let timeout_prommise = Promise.race([
            fetch_promise,
            abort_promise
        ]);

        setTimeout(()=>{
            abort_fn();
        },timeout)

        return timeout_prommise
    };

    click = ()=>{
        let promise = new Promise(function (resolve,reject) {
            setTimeout(()=>{
                resolve("ok")
            },2000)
        });
       this.time_out(promise,1000)
           .then(res=>console.log("ok"+res),err=>console.log(err))
    };

    render(){
        return(
            <div>
                <button onClick={this.click}>请求</button>
            </div>
        )
    }
}

export default TimeOut