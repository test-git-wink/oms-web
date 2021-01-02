import * as React from "react";
import { connect } from "react-redux";
import { isValidOrderCancellation } from "../../../validation/orderValidation";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import { OrderRequestStatus } from "../../../common/orderStatus";

class OrderDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.data,
      page: 0,
      loading: false,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCancelOrder = this.handleCancelOrder.bind(this);
    this.isValidCancellation = this.isValidCancellation.bind(this);

    this.columns = [
      { field: "id", headerName: "Order Id", width: 70 },
      { field: "customerId", headerName: "Customer Id", width: 100 },
      { field: "orderTotalPrice", headerName: "Order Total Price", width: 150 },
      {
        field: "orderTimestamp",
        headerName: "Order Timestamp",

        width: 160,
      },
      {
        field: "orderStatus",
        headerName: "Order Status",

        width: 130,
      },
      {
        field: "deliveryDate",
        headerName: "Delivery Date",

        width: 160,
      },

      {
        field: "deliveryAddress",
        headerName: "Delivery Address",

        width: 270,
      },
      {
        field: "deliveryStatus",
        headerName: "Delivery Status",

        width: 150,
      },
      {
        field: "orderCancel",
        headerName: "Cancel Order",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        valueGetter: this.isValidCancellation,
        renderCell: (params) => {
          if (this.isValidCancellation(params))
            return (
              <strong>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 16 }}
                  onClick={() => this.handleCancelOrder(params)}
                >
                  Cancel Order
                </Button>
              </strong>
            );
          else return <strong>Cannot cancel order</strong>;
        },
      },
    ];
  }

  isValidCancellation(params) {
    const orderStatus = params.getValue("orderStatus");

    return isValidOrderCancellation(orderStatus);
  }

  handlePageChange(params) {
    console.log(params);
    this.setState({ page: params.page, loading: true });

    this.props.getOrders({
      fromDate: this.props.fromDate,
      toDate: this.props.toDate,
      page: params.page,
      pageLimit: this.props.pageLimit,
    });

    this.setState({ rows: this.props.data, loading: false });
  }

  handleCancelOrder(params) {
    console.log(params);
    this.props.cancelOrder({
      orderId: params.getValue("id"),
      orderStatus: OrderRequestStatus.CANCEL,
    });
    this.props.getOrders({
      fromDate: this.props.fromDate,
      toDate: this.props.toDate,
      page: this.state.page,
      pageLimit: this.props.pageLimit,
    });
  }

  render() {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={this.props.data ? this.props.data : []}
          columns={this.columns}
          pageSize={this.props.pageLimit}
          checkboxSelection={false}
          rowCount={this.props.dataCount}
          paginationMode="server"
          onPageChange={this.handlePageChange}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingStatus: state.viewOrderData.loadingStatus,
  data: state.viewOrderData.orderData.orders,
  dataCount: state.viewOrderData.orderData.orderCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (params) =>
      dispatch({ type: "GET_ORDER_DATA", payload: params }),
    cancelOrder: (params) =>
      dispatch({ type: "PATCH_ORDER_DATA", payload: params }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDataTable);
