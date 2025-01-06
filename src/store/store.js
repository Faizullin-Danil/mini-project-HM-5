import { createStore } from "redux";
import toggleReducer from "./redusers";

const store = createStore(toggleReducer);

export default store