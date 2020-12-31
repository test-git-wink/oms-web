import produce from "immer";
import { call, put, takeLatest } from "redux-saga/effects";
import { getOrderData } from "../../../api/order/orderApiCalls";
import { LoadingStatus } from "../../../rootReducer/actions";

export const ViewOrdersEvent = {
  GET_VIEW_ORDER_DATA: "GET_VIEW_ORDER_DATA",
  GET_VIEW_ORDER_DATA_RESULT: "GET_VIEW_ORDER_DATA_RESULT",
};

export const GetViewOrdersAction = (payloadData) => ({
  type: ViewOrdersEvent.GET_VIEW_ORDER_DATA,
  payload: payloadData,
});

export const GetViewOrdersResultAction = (data) => ({
  type: ViewOrdersEvent.GET_VIEW_ORDER_DATA_RESULT,
  orderData: data,
});

export const ViewOrdersData = {
  loadingStatus: LoadingStatus.LOADING_STARTED,
  orderData: [],
};

export function viewOrderReducer(state = ViewOrdersData, action) {
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ViewOrdersEvent.GET_VIEW_ORDER_DATA_RESULT: {
        draft.loadingStatus = LoadingStatus.LOADING_SUCCESS;
        draft.orderData = action.orderData;
        break;
      }

      case ViewOrdersEvent.GET_VIEW_ORDER_DATA: {
        draft.loadingStatus = LoadingStatus.LOADING_STARTED;
        draft.payload = action.payload;
        break;
      }
    }
  });
}

export const ViewOrdersSagas = [getViewOrdersDataSaga];

function* getViewOrdersDataSaga() {
  yield takeLatest(ViewOrdersEvent.GET_VIEW_ORDER_DATA, callGetViewOrdersData);
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
