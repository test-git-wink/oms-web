import produce from "immer";
import { call, put, takeLatest } from "redux-saga/effects";
import { getOrderData, patchOrderData } from "../../../api/order/orderApiCalls";
import { LoadingStatus } from "../../../rootReducer/actions";

export const OrderEvents = {
  GET_ORDER_DATA: "GET_ORDER_DATA",
  GET_ORDER_DATA_RESULT: "GET_ORDER_DATA_RESULT",
  PATCH_ORDER_DATA: "PATCH_ORDER_DATA",
};

export const GetViewOrdersAction = (payloadData) => ({
  type: OrderEvents.GET_ORDER_DATA,
  payload: payloadData,
});

export const GetViewOrdersResultAction = (data) => ({
  type: OrderEvents.GET_ORDER_DATA_RESULT,
  orderData: data,
});

export const PatchCancelOrdersAction = (payloadData) => ({
  type: OrderEvents.PATCH_ORDER_DATA,
  payload: payloadData,
});

export const OrdersData = {
  loadingStatus: LoadingStatus.LOADING_STARTED,
  orderData: [],
};

export function orderReducer(state = OrdersData, action) {
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case OrderEvents.GET_ORDER_DATA_RESULT: {
        draft.loadingStatus = LoadingStatus.LOADING_SUCCESS;
        draft.orderData = action.orderData;
        break;
      }

      case OrderEvents.GET_ORDER_DATA: {
        draft.loadingStatus = LoadingStatus.LOADING_STARTED;
        draft.viewOrderpayload = action.payload;
        break;
      }
      case OrderEvents.PATCH_ORDER_DATA: {
        draft.loadingStatus = LoadingStatus.LOADING_STARTED;
        draft.cancelOrderpayload = action.payload;
        break;
      }
    }
  });
}

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
    const results = yield call(patchOrderData, action.payload);
    console.log("respone =>", results.data);
  } catch (error) {
    console.log(error);
  }
}
