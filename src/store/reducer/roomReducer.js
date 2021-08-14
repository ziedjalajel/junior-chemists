import * as actionTypes from "../actions/types";

const initialState = {
  rooms: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROOMS:
      console.log(action.payload);
      return {
        ...state,
        rooms: action.payload,
        loading: false,
      };

    case actionTypes.ADD_ROOM:
      const { newRoom } = action.payload;
      return {
        ...state,
        rooms: [...state.rooms, newRoom],
      };
    case actionTypes.DETAIL_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id === action.payload.roomId),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
