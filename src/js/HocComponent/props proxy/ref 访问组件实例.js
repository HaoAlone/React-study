// 通过ref 回调函数的形式访问传入组件的实例
import React, { Component } from 'react';

const refHoc = WrappedComponent => class extends Component {

    componentDidMount() {
        console.log(this.instanceComponent, 'instanceComponent');
    }

    render() {
        return (<WrappedComponent
            {...this.props}
            ref={instanceComponent => this.instanceComponent = instanceComponent}
        />);
    }
};

export default refHoc;