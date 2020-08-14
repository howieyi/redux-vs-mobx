import React from "react";
import { connect } from "react-redux";
import { counterActionEnum } from "../reducers/counter";

function Counter(props) {
  const { counter, doStep, doReset } = props;

  return (
    <div>
      <span>计步器：{counter.step}</span>
      {"  "}
      <button onClick={() => doStep()}>计步</button>
      {"  "}
      <button onClick={() => doReset()}>重置</button>
    </div>
  );
}

export default connect(
  // mapStateToProps 将 state 映射到组件的 props 中
  (state) => ({ counter: state.counter }),
  // 将 dispatch 转发后的 action 映射到组件的 props 中
  (dispatch) => ({
    doStep: () => dispatch({ type: counterActionEnum.step }),
    doReset: () => dispatch({ type: counterActionEnum.reset }),
  })
)(Counter);
