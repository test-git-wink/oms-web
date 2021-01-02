import axios from "axios";

export async function getOrderData(data) {
  try {
    console.log("getOrderData api param =>", data);
    const resp = await axios.get(
      `http://localhost:8082/v1/customer-orders/order`,
      {
        params: {
          fromDate: data.fromDate,
          toDate: data.toDate,
          page: data.page,
          limit: data.pageLimit,
        },
      }
    );

    console.log("getOrderData api response...", resp);

    return resp;
  } catch (error) {
    console.log(error);
  }
}

export async function patchOrderData(data) {
  try {
    console.log("patchOrderData api param =>", data);
    const resp = await axios.patch(
      `http://localhost:8082/v1/customer-orders/order/${data.orderId}`,
      {
        orderStatus: data.orderStatus,
      }
    );

    console.log("getOrderData api response...", resp);

    return resp;
  } catch (error) {
    console.log(error);
  }
}

export async function postOrderData(data) {
  try {
    console.log("postOrderData api param =>", data);
    const resp = await axios.patch(
      `http://localhost:8082/v1/customer-orders/order`,
      {
        userId: data.userId,
        orderItemList: data.orderItemList,
        orderStatus: data.orderStatus,
        shipmentDate: data.shipmentDate,
        userAddresID: data.userAddresID,
      }
    );

    console.log("postOrderData api response...", resp);

    return resp;
  } catch (error) {
    console.log(error);
  }
}
