import React, { Component, ComponentType } from 'react';



class Qualifications extends Component {
    render() {
        return (
            <div>
                <h1>React</h1>
                <p>React.js 是一个构件用户界面的库</p>
            </div>
        );
    }
}

const withCopyright = (WrappedComponent: ComponentType) => {
    // 匿名类
    return class extends Component {
        render () {
            return (
                <>
                    <WrappedComponent></WrappedComponent>
                    <div>@copyright; 版权所有 XiaoZhouzi</div>
                </>
            )
        }
    }
}

const CopyrightAPP = withCopyright(Qualifications);

export default CopyrightAPP;
