import * as actionTypes from "../actions/types";

const initialState = {
  questions: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };

    case actionTypes.ADD_QUESTION:
      const { newQuestion } = action.payload;
      return {
        ...state,
        questions: [...state.questions, newQuestion],
      };
    case actionTypes.DETAIL_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id === action.payload.questionId
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
