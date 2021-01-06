import { call, put, takeLatest } from "redux-saga/effects";
import {
  postOrderData,
  getProductData,
  getUserAddressData,
} from "../../../../api/order/orderApiCalls";
import {
  AddOrderEvents,
  PostOrderDataResultAction,
  GetProductDataResultAction,
  GetProductDataFailAction,
  GetUserAddresFailAction,
  GetUserAddresResultAction,
  PostOrderDataFailAction,
} from "./addOrderActions";

export const addOrderSagas = [
  postOrdersDataSaga,
  getProductsDataSaga,
  getUserAddressDataSaga,
];

function* postOrdersDataSaga() {
  yield takeLatest(AddOrderEvents.POST_ORDER_DATA, callPostOrdersData);
}
function* callPostOrdersData(action) {
  try {
    console.log("callPostOrdersData =>", action.payload);
    const results = yield call(postOrderData, action.payload);
    console.log("respone =>", results.data);
    yield put(PostOrderDataResultAction(results.data));
  } catch (error) {
    yield put(PostOrderDataFailAction());
    console.log(error);
  }
}

function* getProductsDataSaga() {
  yield takeLatest(AddOrderEvents.GET_PRODUCT_DATA, callGetProductsData);
}
function* callGetProductsData() {
  try {
    console.log("callGetProductsData =>");
    const results = yield call(getProductData);
    console.log("respone =>", results.data);
    yield put(GetProductDataResultAction(results.data));
  } catch (error) {
    yield put(GetProductDataFailAction());
    console.log(error);
  }
}

function* getUserAddressDataSaga() {
  yield takeLatest(AddOrderEvents.GET_USER_ADDRESS_DATA, callUserAddressData);
}
function* callUserAddressData(action) {
  try {
    console.log("callGetProductsData =>");
    const results = yield call(getUserAddressData, action.payload);
    console.log("respone =>", results.data);
    yield put(GetUserAddresResultAction(results.data));
  } catch (error) {
    yield put(GetUserAddresFailAction());
    console.log(error);
  }
}
