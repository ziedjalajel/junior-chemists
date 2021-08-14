import instance from "./instance";

import * as actionTypes from "./types";

export const fetchChoices = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/choices");

      dispatch({
        type: actionTypes.FETCH_CHOICES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const choiceDetail = (choiceId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/choices/${choiceId}`);
      dispatch({
        type: actionTypes.DETAIL_CHOICE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
