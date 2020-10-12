import React, { Component } from 'react';
import { setTimeoutRequest } from '../../utils/http';
import Controlled from '../Form/controlled';
import UnControlled from '../Form/UnControlled';
interface IProps {}
interface IState {
  msg: string;
}

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      msg: '获取数据页面',
    };
  }

  async componentDidMount() {
    let ts = await setTimeoutRequest({
      url: 'https://www.baidu.com',
      type: 'get',
    });
    console.log(ts, 'ts');
  }

  render() {
    let { msg } = this.state;
    return (
      <div>
        {msg}
        <Controlled />
        <hr />
        <UnControlled />
      </div>
    );
  }
}
