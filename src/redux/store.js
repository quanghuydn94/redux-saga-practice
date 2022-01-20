import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
