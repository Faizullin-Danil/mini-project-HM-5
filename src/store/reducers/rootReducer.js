import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
    toggle: toggleReducer,
    comments: commentReducer
});

export default rootReducer;
