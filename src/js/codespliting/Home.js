import React , {Component} from "react"
export default class Home extends Component {
    componentWillMount() {
        import('./Content').then(Bar => {
            console.log(Bar.default)
            this.setState({ Bar: Bar.default });
        });
    }

    render(){
        return (
            <div>
                HOME
            </div>
        )
    }

}