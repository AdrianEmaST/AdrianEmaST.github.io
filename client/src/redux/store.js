import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(composeWithDevTools(applyMiddleware(thunkMiddleware))),
);

export default store;