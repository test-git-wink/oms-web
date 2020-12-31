import * as React from "react";
import { connect } from "react-redux";
import { isValidOrderCancellation } from "../../../validation/orderValidation";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";

function isValidCancellation(params) {
  const orderStatus = params.getValue("orderStatus");

  return isValidOrderCancellation(orderStatus);
}

const columns = [
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
    valueGetter: isValidCancellation,
    renderCell: (params) => {
      if (isValidCancellation(params))
        return (
          <strong>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
            >
              Cancel Order
            </Button>
          </strong>
        );
      else return <strong>Cannot cancel order</strong>;
    },
  },
];

class OrderDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      page: 0,
      loading: false,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(params) {
    console.log(params);
    this.props.getOrders({
      fromDate: this.props.fromDate,
      toDate: this.props.toDate,
      page: params.page,
      pageLimit: this.props.pageLimit,
    });
  }

  render() {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={this.props.data ? this.props.data : []}
          columns={columns}
          pageSize={this.props.pageLimit}
          checkboxSelection={false}
          rowCount={100}
          paginationMode="server"
          onPageChange={this.handlePageChange}
          loading={this.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingStatus: state.viewOrderData.loadingStatus,
  data: state.viewOrderData.orderData.orders,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (params) =>
      dispatch({ type: "GET_VIEW_ORDER_DATA", payload: params }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDataTable);
