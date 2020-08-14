import React from "react";
import { render } from "react-dom";
import { inject, observer, Provider } from "mobx-react";
import counterStore from "./store";

function Counter({ counterStore }) {
  const { step, doStep, doReset } = counterStore;

  return (
    <div>
      <span>计步器：{step}</span>
      {"  "}
      <button onClick={() => doStep()}>计步</button>
      {"  "}
      <button onClick={() => doReset()}>重置</button>
    </div>
  );
}

const CounterApp = inject("counterStore")(observer(Counter));

render(
  <Provider counterStore={counterStore}>
    <div>
      <h1>mobx 计步器</h1>
      <CounterApp />
    </div>
  </Provider>,
  document.getElementById("mobx")
);
