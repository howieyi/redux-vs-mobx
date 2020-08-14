// 初始 state
const INITIAL_STATE = {
  step: 0,
};

// 抽离对外暴露的行为枚举
export const counterActionEnum = {
  step: "step",
  reset: "reset",
};

// 定义 reducer 不同行为下的不同 state 处理
export default function counterReducer(state = INITIAL_STATE, action) {
  console.log("reducer@", state, action, INITIAL_STATE);

  switch (action.type) {
    case counterActionEnum.step:
      return {
        step: state.step + 1,
      };
    case counterActionEnum.reset:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}
