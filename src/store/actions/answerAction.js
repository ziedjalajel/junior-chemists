import instance from "./instance";

import * as actionTypes from "./types";

export const fetchAnswers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/answers");

      dispatch({
        type: actionTypes.FETCH_ANSWERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const addAnswer = (roomId, questionId, choiceId, userId) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `rooms/${roomId}/${questionId}/${choiceId}/${userId}`
      );
      dispatch({
        type: actionTypes.ADD_ANSWER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const answerDetail = (answerId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/answers/${answerId}`);
      dispatch({
        type: actionTypes.DETAIL_ANSWER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
