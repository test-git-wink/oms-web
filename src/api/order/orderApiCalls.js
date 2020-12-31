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
