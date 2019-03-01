import React , {Component } from "react"

const DataSource = {
    getBlogPost:(a)=>{
        return a+1
    }
}
const DataSource1 = {
    getBlogPost:(a)=>{
        return a*a
    }
}


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };
    }

    click = ()=>{
        console.log("click")
    };

    render() {
        return <div onClick={this.click}>{this.state.blogPost}</div>;
    }
}

function withSubscription(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: selectData(DataSource1, props),
                name:12
            };
        }

        render() {
            console.log(this.props)
            const d = {id:123}
            return <WrappedComponent s={this.state.data} {...this.props} {...d}/>;
        }
    };
}

export const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);