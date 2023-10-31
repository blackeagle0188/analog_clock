import { combineReducers } from "redux";
import ClockReducer from "./ClockReducer";

const reducers = combineReducers({
    Clock: ClockReducer,
    //other reducers come here...
});

export default reducers;