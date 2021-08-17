import * as actionTypes from "../actions/types";

const initialState = {
  answers: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ANSWERS:
      console.log(action.payload);
      return {
        ...state,
        answers: action.payload,
        loading: false,
      };
    case actionTypes.ADD_ANSWER:
      const { newAnswer } = action.payload;
      return {
        ...state,
        answers: [...state.answers, newAnswer],
      };
    case actionTypes.DETAIL_ANSWER:
      return {
        ...state,
        answers: state.answers.filter(
          (answer) => answer.id === action.payload.answerId
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
