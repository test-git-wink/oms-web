export const AddOrderEvents = {
  GET_PRODUCT_DATA: "GET_PRODUCT_DATA",
  GET_PRODUCT_DATA_RESULT: "GET_PRODUCT_DATA_RESULT",
  GET_PRODUCT_DATA_FAIL: "GET_PRODUCT_DATA_FAIL",
  GET_USER_ADDRESS_DATA: "GET_USER_ADDRESS_DATA",
  GET_USER_ADDRESS_DATA_RESULT: "GET_USER_ADDRESS_DATA_RESULT",
  GET_USER_ADDRESS_DATA_FAIL: "GET_USER_ADDRESS_DATA_FAIL",
  POST_ORDER_DATA: "POST_ORDER_DATA",
  POST_ORDER_DATA_RESULT: "POST_ORDER_DATA_RESULT",
  POST_ORDER_DATA_FAIL: "POST_ORDER_DATA_FAIL",
  ADD_ORDER_ITEM_DATA: "ADD_ORDER_ITEM_DATA",
  REMOVE_ORDER_ITEM_DATA: "REMOVE_ORDER_ITEM_DATA",
  ADD_USER_ADDRESS_DATA: "ADD_USER_ADDRESS_DATA",
};

export const GetProductDataAction = () => ({
  type: AddOrderEvents.GET_PRODUCT_DATA,
});

export const GetProductDataResultAction = (data) => ({
  type: AddOrderEvents.GET_PRODUCT_DATA_RESULT,
  productData: data,
});

export const GetProductDataFailAction = () => ({
  type: AddOrderEvents.GET_PRODUCT_DATA_FAIL,
});

export const GetsUserAddresDataAction = (payloadData) => ({
  type: AddOrderEvents.GET_USER_ADDRESS_DATA,
  payload: payloadData,
});

export const GetUserAddresResultAction = (data) => ({
  type: AddOrderEvents.GET_USER_ADDRESS_DATA_RESULT,
  userAddressData: data,
});
export const GetUserAddresFailAction = () => ({
  type: AddOrderEvents.GET_USER_ADDRESS_DATA_FAIL,
});

export const PostOrderDataAction = (payloadData) => ({
  type: AddOrderEvents.POST_ORDER_DATA,
  payload: payloadData,
});

export const PostOrderDataResultAction = (data) => ({
  type: AddOrderEvents.POST_ORDER_DATA_RESULT,
  postOrderResponseData: data,
});

export const PostOrderDataFailAction = (data) => ({
  type: AddOrderEvents.POST_ORDER_DATA_FAIL,
});

export const AddOrderItemsAction = (data) => ({
  type: AddOrderEvents.ADD_ORDER_ITEM_DATA,
  orderItem: data,
});

export const RemoveOrderItemsAction = (data) => ({
  type: AddOrderEvents.REMOVE_ORDER_ITEM_DATA,
  itemId: data,
});

export const AddUserAddressAction = (data) => ({
  type: AddOrderEvents.ADD_USER_ADDRESS_DATA,
  userAddressId: data,
});
