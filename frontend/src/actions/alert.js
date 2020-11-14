import uuid from "uuid/v1";
import { REOMVE_ALERT, SET_ALERT } from "./types";

export const setAlert = (msg, alertType,timeout=5000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => {
    dispatch({ type: REOMVE_ALERT, payload: id });
  }, timeout);
};
