import React, {Component} from 'react'
import PropTypes from "prop-types"

const ThemeContext = React.createContext({
    theme: "dark", toggle: () => {
    }
});

class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
        }

    }

    toggle = () => {
        this.setState(state => {
            return {
                theme: state.theme === "light" ? "pink" : "light"
            }
        })
    };

    render() {
        const {theme} = this.state;
        const value = {theme: theme, toggle: this.toggle}
        return (
            <ThemeContext.Provider value={value}>
                <Consumer/>
            </ThemeContext.Provider>
        )
    }
}

class Consumer extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    value => (
                        <Div toggle={value.toggle} theme={value.theme}/>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}

class Div extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {toggle, theme} = this.props;
        return (
            <div onClick={toggle}>{theme}</div>
        )
    }
}

function Box(props) {
    return (
        <div>
            <p>context</p>
            <Context/>
        </div>
    )
}

export default Box

// class Index extends Component {
//     static childContextTypes = {
//         color:PropTypes.string
//     };
//
//     getChildContext(){
//         return {color:this.state.color}
//     }
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             color:"red"
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <Main/>
//             </div>
//         )
//     }
// }
//
// class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>This is header</h2>
//                 <Title/>
//             </div>
//         )
//     }
// }
//
// class Main extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>This is main</h2>
//                 <Content/>
//             </div>
//         )
//     }
// }
//
// class Title extends Component {
//     static contextTypes = {
//         color:PropTypes.string
//     }
//     render() {
//         return (
//             <h1 style={{ color: this.context.color }}>React.js 小书标题</h1>
//         )
//     }
// }
//
// class Content extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>React.js 小书内容</h2>
//             </div>
//         )
//     }
// }
//
// export {Index}