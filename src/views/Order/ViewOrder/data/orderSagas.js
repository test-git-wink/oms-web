import { call, put, takeLatest } from "redux-saga/effects";
import {
  getOrderData,
  patchOrderData,
} from "../../../../api/order/orderApiCalls";
import { OrderEvents, GetViewOrdersResultAction } from "./orderActions";

export const orderSagas = [getViewOrdersDataSaga, patchOrdersDataSaga];
function* getViewOrdersDataSaga() {
  yield takeLatest(OrderEvents.GET_ORDER_DATA, callGetViewOrdersData);
}
function* callGetViewOrdersData(action) {
  try {
    console.log("callGetViewOrdersData =>", action.payload);
    const results = yield call(getOrderData, action.payload);
    console.log("respone =>", results.data);
    yield put(GetViewOrdersResultAction(results.data));
  } catch (error) {
    console.log(error);
  }
}
function* patchOrdersDataSaga() {
  yield takeLatest(OrderEvents.PATCH_ORDER_DATA, callPatchOrdersData);
}
function* callPatchOrdersData(action) {
  try {
    console.log("callPatchOrdersData =>", action.payload);
    const results = yield call(patchOrderData, action.payload.cancelData);
    console.log("respone patchOrderData =>", results.data);
    const orderResults = yield call(getOrderData, action.payload.getOrderData);
    console.log("respone patchOrderData =>", orderResults.data);
    yield put(GetViewOrdersResultAction(orderResults.data));
  } catch (error) {
    console.log(error);
  }
}
