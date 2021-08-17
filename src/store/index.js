import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchRooms } from "./actions/roomAction";
import { fetchAnswers } from "./actions/answerAction";
import { fetchQuestions } from "./actions/questionAction";
import { fetchChoices } from "./actions/choiceAction";
import rootReducer from "./reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

//run once at the begining

store.dispatch(fetchRooms());
store.dispatch(fetchAnswers());
store.dispatch(fetchQuestions());
store.dispatch(fetchChoices());

export default store;
