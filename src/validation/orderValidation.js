import { OrderStatusConst } from "../common/orderStatus";

export function isValidOrderCancellation(val) {
  return val !== OrderStatusConst.FAIL && val !== OrderStatusConst.CANCEL;
}

export const isValidNumber = (str) => {
  return /^\+?(0|[1-9]\d*)$/.test(str);
};
