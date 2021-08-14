import * as actionTypes from "../actions/types";

const initialState = {
  choices: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHOICES:
      console.log(action.payload);
      return {
        ...state,
        choices: action.payload,
        loading: false,
      };
    case actionTypes.ADD_CHOICE:
      const { newChoice } = action.payload;
      return {
        ...state,
        choices: [...state.choices, newChoice],
      };
    case actionTypes.DETAIL_CHOICE:
      return {
        ...state,
        choices: state.choices.filter(
          (choice) => choice.id === action.payload.choiceId
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
