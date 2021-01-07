import { LoadingStatus } from "../../../../rootReducer/actions";

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
  loadingStatus: LoadingStatus.NO_DATA,
  orderData: [],
};
