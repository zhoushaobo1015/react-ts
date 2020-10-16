import React, { FormEvent } from 'react';

// 非受控组件 ref
const UnControlled = () => {
  let unRef: React.RefObject<HTMLInputElement> = React.createRef();

  let pwdUnRef: HTMLInputElement | null;

  let handleSubmitFn = (e: FormEvent) => {
    e.preventDefault();
    // 通过非受控组件方式处理 unRef.current 可能为空状态
    // 1. ?
    // 2. !
    // 3. as

    console.log(unRef.current!.value);
    console.log(unRef.current?.value);
    console.log((unRef.current as HTMLInputElement).value);

    console.log(pwdUnRef?.value);
  };

  return (
    <form action="" onSubmit={handleSubmitFn}>
      <input type="text" ref={unRef} />
      <br />
      <input type="text" ref={node => (pwdUnRef = node)} />
      <br />
      <button type="submit">提交</button>
    </form>
  );
};
export default UnControlled;
