// 封装样式，调整布局

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            return (
                <div style={{display: 'block'}}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}