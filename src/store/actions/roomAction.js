import instance from "./instance";

import * as actionTypes from "./types";

export const fetchRooms = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/rooms");

      dispatch({
        type: actionTypes.FETCH_ROOMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const addRoom = () => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/rooms");
      dispatch({
        type: actionTypes.ADD_ROOM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const roomDetail = (roomId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/rooms/${roomId}`);
      dispatch({
        type: actionTypes.DETAIL_ROOM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
