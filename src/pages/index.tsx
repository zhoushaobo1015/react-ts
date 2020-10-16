import React, { Component } from 'react';
import './index.less';
import About from './about';
import Business from './business';
import Qualifications from './qualifications';
import Data from './data';
interface IProps {}
interface IState {
  count: number;
  color: string;
  state: boolean;
}

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
      color: '#b6b6b6',
      state: false,
    };
  }

  add = () => {
    let { count } = this.state;
    count++;
    this.setState({
      count,
    });
  };

  remove = () => {
    let { count } = this.state;
    if (count) {
      count--;
    } else {
      count = 0;
    }
    this.setState({
      count,
    });
    let num: number = this.headleNum(count);
  };

  headleNum = (a: number): number => {
    return a + this.state.count;
  };
  checkColor = (e: React.MouseEvent) => {
    console.log(e, e.target);
    let color = '#' + Math.floor(Math.random() * 1000000);
    this.setState({ color });
  };
  onCheckPage = () => {
    this.setState({
      state: !this.state.state,
    });
  };

  render() {
    let { count, color, state } = this.state;
    return (
      <div>
        <h2>
          <button onClick={this.onCheckPage}>切换页面功能</button>
        </h2>
        {state ? (
          <div>
            <h1 className="title">Page index</h1>
            <hr />
            <About color={color} children="修改" click={this.checkColor} />
            <hr />
            <Business
              count={count}
              add={this.add}
              remove={this.remove}
            ></Business>
            <hr />
            <Qualifications></Qualifications>
          </div>
        ) : (
          <Data />
        )}
      </div>
    );
  }
}
