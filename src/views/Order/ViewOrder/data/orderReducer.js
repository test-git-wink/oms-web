import produce from "immer";
import { LoadingStatus } from "../../../../rootReducer/actions";
import { OrdersData, OrderEvents } from "./orderActions";

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
        // draft.viewOrderpayload = action.payload;
        break;
      }
      case OrderEvents.PATCH_ORDER_DATA: {
        draft.loadingStatus = LoadingStatus.LOADING_STARTED;
        // draft.cancelOrderpayload = action.payload;
        break;
      }
    }
  });
}
