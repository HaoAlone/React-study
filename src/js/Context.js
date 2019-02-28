import React, {Component} from 'react'

const ThemeContext = React.createContext({
    theme: "dark", toggle: () => {
    }
})

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
    constructor(props){
        super(props)
    }
    render() {
        const {toggle,theme} = this.props;
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