import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { homePageReducer, homePageSagas } from "../views/Home/index";
import {
  viewOrderReducer,
  ViewOrdersSagas,
} from "../views/Order/ViewOrder/index";

const rootReducer = () =>
  combineReducers({
    mainPageData: homePageReducer,
    viewOrderData: viewOrderReducer,
  });

function* rootSaga() {
  let sagas = [...homePageSagas, ...ViewOrdersSagas];

  yield all(sagas.map((s) => fork(s)));
}

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer(),
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
