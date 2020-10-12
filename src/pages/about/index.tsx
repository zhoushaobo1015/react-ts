import React, { Component, ReactNode } from 'react';

interface IProps {
  click(e: React.MouseEvent): void;
  children: ReactNode;
  color: string;
}
interface IState {
  color: string;
}

class About extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      color: 'red',
    };
  }

  checkColor = () => {
    let color = '#' + Math.floor(Math.random() * 1000000);
    this.setState({ color });
  };

  render() {
    let { color } = this.state;
    return (
      <div>
        <span style={{ color: color }} onClick={this.checkColor}>
          ~我自己能改~
        </span>
        <br />
        <a style={{ color: this.props.color }} onClick={this.checkColor}>
          ~来呀~(@^_^@)~修改呀
        </a>
        <button onClick={this.props.click}>{this.props.children}</button>
      </div>
    );
  }
}

export default About;
