import { REOMVE_ALERT, SET_ALERT } from "../actions/types";
const intialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REOMVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
  