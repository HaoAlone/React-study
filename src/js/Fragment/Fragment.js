import React, {Component} from "react"

 class Fragment extends Component {
    render() {
        return (
            <ul>
                <Item/>
            </ul>
        )
    }
}

function Item() {
    return (
        <>
            <li>1</li>
            <li>2</li>

        </>
    )
}

export default Fragment