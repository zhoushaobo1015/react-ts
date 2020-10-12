import axios from 'axios';
interface IRequest<T> {
  message: string;
  result: T;
  success: boolean;
}

interface ISend {
  url: string;
  type: 'get' | 'post';
  data?: any;
}

function setTimeoutRequest(data: ISend): Promise<IRequest<object[]>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: '发送请求',
        result: [{ name: 'zhoushaobo', age: 32 }],
        success: true,
      });
    }, 2000);
  });
}

function axiosRequest() {}

export { setTimeoutRequest, axiosRequest };
