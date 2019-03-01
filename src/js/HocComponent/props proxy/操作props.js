//对原组件的props进行增删改查

function ppHoc(Component){
    return class extends React.Component {
        render(){
            const newProps = {user:"iam new"}
            return(
                <Component {...this.props} {...newProps}/>
            )
        }
    }
}