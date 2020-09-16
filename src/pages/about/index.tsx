import React, { Component } from 'react';

interface IProps {}
interface IState {
    color: string,
}


class About extends Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            color: 'red',
        }
    }

    checkColor = () => {
        let color = "#" + Math.floor(Math.random()*1000000);
        this.setState({color});
    }

    render() {
        let {color} = this.state;
        return (
            <div>
                <span style={{color: color}} onClick={this.checkColor}>点我修改颜色</span>
            </div>
        );
    }
}

export default About;