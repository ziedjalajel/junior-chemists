import instance from "./instance";

import * as actionTypes from "./types";

export const fetchQuestions = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/questions");

      dispatch({
        type: actionTypes.FETCH_QUESTIONS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const questionDetail = (questionId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/questions/${questionId}`);
      console.log("honak:", res);
      dispatch({
        type: actionTypes.DETAIL_QUESTION,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
