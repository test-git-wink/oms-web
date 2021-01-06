import { OrderStatusConst } from "../common/orderStatus";
import { isBefore, isEqual, isValid } from "date-fns";

export function isValidOrderCancellation(val) {
  return val !== OrderStatusConst.FAIL && val !== OrderStatusConst.CANCEL;
}

export const isValidNumber = (str) => {
  return /^\d*\.?\d*$/.test(str);
};

export const isVallidDateRange = (fromDate, toDate) => {
  if (isValid(new Date(fromDate)) && isValid(new Date(toDate))) {
    let fromParsed = new Date(fromDate);
    let toParsed = new Date(toDate);
    return isBefore(fromParsed, toParsed) || isEqual(toParsed, fromParsed);
  }
  return false;
};
