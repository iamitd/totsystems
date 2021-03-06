import {combineReducers, createStore} from "redux";
import chatReducer from "./chat-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({
    chatPage: chatReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers);


export default store;
window.store = store;