import * as actionTypes from "./actionTypes";

export function updateCounter(counter: number) {
  const action: actionTypes.ActionType = {
    type: actionTypes.UPDATECOUNTER,
    counter: counter,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: actionTypes.ActionType) {
  return (dispatch: actionTypes.DispatchType) => {
    dispatch(action);
  };
}
