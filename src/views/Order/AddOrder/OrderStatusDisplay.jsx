import React from "react";
import { useSelector } from "react-redux";
import {
  LoadingStatus,
  OrderStatusConst,
  responseMsgs,
} from "../../../rootReducer/actions";
import MuiAlert from "@material-ui/lab/Alert";

export default function OrderStatusDisplay() {
  const postOrderStatus = useSelector(
    (state) => state.addOrderFormData.loadingStatusOrderRequest
  );

  const postOrderResponse = useSelector(
    (state) => state.addOrderFormData.placeOrderResponse
  );

  if (
    postOrderStatus === LoadingStatus.LOADING_SUCCESS &&
    postOrderResponse.orderStatus === OrderStatusConst.PLACED
  ) {
    return (
      <MuiAlert elevation={6} variant="filled" severity="success">
        <h6 className="my-1">
          {" "}
          <strong>
            Order {postOrderResponse.orderId} was successfully Placed{" "}
          </strong>
        </h6>
      </MuiAlert>
    );
  } else if (
    postOrderStatus === LoadingStatus.LOADING_SUCCESS &&
    postOrderResponse.message !== responseMsgs.SUCCESS
  ) {
    return (
      <MuiAlert elevation={6} variant="filled" severity="error">
        <h6 className="my-1">
          <strong>Order placement was unsuccessfull </strong>
        </h6>
      </MuiAlert>
    );
  } else if (postOrderStatus === LoadingStatus.LOADING_ERROR) {
    return (
      <MuiAlert elevation={6} variant="filled" severity="error">
        <h6 className="my-1">
          <strong>Order placement was unsuccessfull </strong>
        </h6>
      </MuiAlert>
    );
  } else {
    return <div></div>;
  }
}
