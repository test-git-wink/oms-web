import produce from "immer";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoadingStatus } from "../../../rootReducer/actions";
import { postOrderData } from "../../../api/order/orderApiCalls";

export const PostOrderEvents = {
  POST_ORDER_DATA: "POST_ORDER_DATA",
  POST_ORDER_DATA_RESULT: "POST_ORDER_DATA_RESULT",
};

export const PostOrderDatasAction = (payloadData) => ({
  type: PostOrderEvents.POST_ORDER_DATA,
  payload: payloadData,
});

export const PostOrderDatasResultAction = (data) => ({
  type: PostOrderEvents.POST_ORDER_DATA_RESULT,
  postOrderResponseData: data,
});

export const PostOrdersData = {
  loadingStatus: LoadingStatus.LOADING_STARTED,
  postOrderResponseData: [],
};

export function postOrderReducer(state = PostOrdersData, action) {
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case PostOrderEvents.POST_ORDER_DATA_RESULT: {
        draft.loadingStatus = LoadingStatus.LOADING_SUCCESS;
        draft.orderData = action.postOrderData;
        break;
      }

      case PostOrderEvents.POST_ORDER_DATA: {
        draft.loadingStatus = LoadingStatus.LOADING_STARTED;
        draft.viewOrderpayload = action.payload;
        break;
      }
    }
  });
}

export const postOrderSagas = [postOrdersDataSaga];

function* postOrdersDataSaga() {
  yield takeLatest(PostOrderEvents.POST_ORDER_DATA, callPostOrdersData);
}

function* callPostOrdersData(action) {
  try {
    console.log("callPostOrdersData =>", action.payload);
    const results = yield call(postOrderData, action.payload);
    console.log("respone =>", results.data);
    yield put(PostOrderDatasResultAction(results.data));
  } catch (error) {
    console.log(error);
  }
}
