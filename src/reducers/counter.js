const INITIAL_STATE = {
  step: 0,
};

export const counterActionEnum = {
  step: "step",
  reset: "reset",
};

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
