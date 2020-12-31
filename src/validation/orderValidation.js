import { OrderStatusConst } from "../common/orderStatus";

export function isValidOrderCancellation(val) {
  return val !== OrderStatusConst.FAIL && val !== OrderStatusConst.CANCEL;
}
