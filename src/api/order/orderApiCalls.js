import axios from "axios";

export async function getOrderData(data) {
  try {
    console.log("getOrderData api param =>", data);
    const resp = await axios.get(
      `http://localhost:8082/v1/customer-orders/orders`,
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
      `http://localhost:8082/v1/customer-orders/orders/${data.orderId}`,
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
    const resp = await axios.post(
      `http://localhost:8082/v1/customer-orders/orders`,
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

export async function getProductData() {
  try {
    console.log("getProductData api param ");
    const resp = await axios.get(
      `http://localhost:8082/v1/customer-orders/orders/products`
    );

    console.log("getProductData api response...", resp);

    return resp;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserAddressData(data) {
  try {
    console.log("getUserAddressData api param ");
    const resp = await axios.get(
      `http://localhost:8082/v1/user/${data}/user-addresses`
    );

    console.log("getUserAddressData api response...", resp);

    return resp;
  } catch (error) {
    console.log(error);
  }
}
