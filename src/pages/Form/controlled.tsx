import React, { Component, ReactElement } from 'react';

type IProps = {};
type IState = {
  x: string;
  m: string;
  [key: string]: any;
};
export default class Form extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      x: '',
      m: '',
    };
  }
  handleChangle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // 受控组件 input
  render() {
    let { x, m } = this.state;
    return (
      <div>
        <label htmlFor="x">
          姓：{' '}
          <input
            type="text"
            id="x"
            name="x"
            onChange={this.handleChangle}
            value={x}
          />
        </label>
        <label htmlFor="m">
          名：{' '}
          <input
            type="text"
            id="m"
            name="m"
            onChange={this.handleChangle}
            value={m}
          />
        </label>
        <p></p>
        <span> {x} </span>
        <span> {m} </span>
      </div>
    );
  }
}
