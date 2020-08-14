import React from "react";
import { connect } from "react-redux";
import { counterActionEnum } from "../reducers/counter";

function Counter(props) {
  console.log(props);
  const { counter, dispatch } = props;

  return (
    <div>
      <span>计步器：{counter.step}</span>
      {"  "}
      <button onClick={() => dispatch({ type: counterActionEnum.step })}>
        计步
      </button>
      {"  "}
      <button onClick={() => dispatch({ type: counterActionEnum.reset })}>
        重置
      </button>
    </div>
  );
}

export default connect((state) => ({ counter: state.counter }))(Counter);
