import { LoadingStatus } from "../../../../rootReducer/actions";
import { AddOrderEvents } from "./addOrderActions";

export const AddOrderFormData = {
  loadingStatusProducts: LoadingStatus.LOADING_STARTED,
  productData: [],
  loadingStatusUserAddress: LoadingStatus.LOADING_STARTED,
  userAddressData: [],
  orderItems: [],
  userAddressId: "",
  orderStatus: "",
  placeOrderResponse: {},
  loadingStatusOrderRequest: LoadingStatus.LOADING_STARTED,
};

export function orderFormDataReducer(state = AddOrderFormData, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AddOrderEvents.GET_PRODUCT_DATA: {
      return {
        ...state,
        loadingStatusProducts: LoadingStatus.LOADING_STARTED,
      };
    }

    case AddOrderEvents.GET_PRODUCT_DATA_RESULT: {
      return {
        ...state,
        loadingStatusProducts: LoadingStatus.LOADING_SUCCESS,
        productData: [...action.productData.products],
      };
    }

    case AddOrderEvents.GET_PRODUCT_DATA_FAIL: {
      return {
        ...state,
        loadingStatusProducts: LoadingStatus.LOADING_ERROR,
      };
    }

    case AddOrderEvents.GET_USER_ADDRESS_DATA: {
      return {
        ...state,
        loadingStatusUserAddress: LoadingStatus.LOADING_STARTED,
      };
    }

    case AddOrderEvents.GET_USER_ADDRESS_DATA_RESULT: {
      return {
        ...state,
        loadingStatusUserAddress: LoadingStatus.LOADING_SUCCESS,
        userAddressData: [...action.userAddressData.userAddresses],
      };
    }

    case AddOrderEvents.GET_USER_ADDRESS_DATA_FAIL: {
      return {
        ...state,
        loadingStatusUserAddress: LoadingStatus.LOADING_ERROR,
      };
    }
    case AddOrderEvents.ADD_ORDER_ITEM_DATA: {
      return {
        ...state,
        orderItems: [...state.orderItems, action.orderItem],
      };
    }
    case AddOrderEvents.ADD_USER_ADDRESS_DATA: {
      return {
        ...state,
        userAddressId: action.userAddressId,
      };
    }

    case AddOrderEvents.POST_ORDER_DATA: {
      return {
        ...state,
        loadingStatusOrderRequest: LoadingStatus.LOADING_STARTED,
      };
    }

    case AddOrderEvents.POST_ORDER_DATA_RESULT: {
      return {
        ...state,
        loadingStatusOrderRequest: LoadingStatus.LOADING_SUCCESS,
        placeOrderResponse: action.postOrderResponseData,
      };
    }

    case AddOrderEvents.POST_ORDER_DATA_FAIL: {
      return {
        ...state,
        loadingStatusOrderRequest: LoadingStatus.LOADING_ERROR,
      };
    }

    default:
      return state;
  }
}
