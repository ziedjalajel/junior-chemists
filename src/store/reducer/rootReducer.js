import { combineReducers } from "redux";
import answerReducer from "./answerReducer";
import choiceReducer from "./choiceReducer";
import questionReducer from "./questionReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  answerReducer,
  choiceReducer,
  questionReducer,
  roomReducer,
});
export default rootReducer;
