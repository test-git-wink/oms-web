import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { homePageReducer, homePageSagas } from "../views/Home/index";
import { viewOrderReducer } from "../views/Order/ViewOrder/data/viewOrderReducer";
import { viewOrderSagas } from "../views/Order/ViewOrder/data/viewOrderSagas";
import { orderFormDataReducer } from "../views/Order/AddOrder/data/addOrderReducer";
import { addOrderSagas } from "../views/Order/AddOrder/data/addtOrderSagas";

const rootReducer = () =>
  combineReducers({
    mainPageData: homePageReducer,
    viewOrderData: viewOrderReducer,
    addOrderFormData: orderFormDataReducer,
  });

function* rootSaga() {
  let sagas = [...homePageSagas, ...viewOrderSagas, ...addOrderSagas];

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
