import * as actionTypes from "./actionTypes";

const initialState: actionTypes.Counter = {
  count: 0,
};

const reducer = (
  state: actionTypes.Counter = initialState,
  action: actionTypes.ActionType
): actionTypes.Counter => {
  switch (action.type) {
    case actionTypes.UPDATECOUNTER:
      return { ...state, count: action.counter };
    default:
      return state;
  }
  return state;
};

export default reducer;
