import React, { Component } from 'react';
import './index.less';
import About from './about';
import Business from './business';
import Qualifications from './qualifications';

interface IProps {

}
interface IState {
  count: number,
}

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  add = () => {
    let { count } = this.state;
    count++
    this.setState({
      count,
    });
  }

  remove = () => {
    let { count } = this.state;
    if (count) {
      count--;
    } else {
      count = 0;
    };
    this.setState({
      count,
    });
  }


  render() {
    let { count } = this.state;
    return (
      <div>
        <h1 className="title">Page index</h1>
        <hr/>
        <About />
        <hr />
        <Business count={count} add={this.add} remove={this.remove}></Business>
        <hr/>
        <Qualifications></Qualifications>
      </div>
    )
  }
}
