import * as React from "react";
import { connect } from "react-redux";
import { isValidOrderCancellation } from "../../../validation/orderValidation";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import { OrderRequestStatus } from "../../../common/orderStatus";
import { withStyles } from "@material-ui/core/styles";
import { LoadingStatus } from "../../../rootReducer/actions";
import NoDataDisplay from "../../../components/Common/NoDataDisplay";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "small",
    textAlign: "center",
    "&.MuiDataGrid-colCellTitle": {
      justifyContent: "center",
    },
  },
});

class OrderDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCancelOrder = this.handleCancelOrder.bind(this);
    this.isValidCancellation = this.isValidCancellation.bind(this);

    this.columns = [
      { field: "id", headerName: "Order Id", width: 90 },
      { field: "customerId", headerName: "Customer Id", width: 110 },
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
                  style={{ marginLeft: 16, background: "red" }}
                  onClick={() => this.handleCancelOrder(params)}
                >
                  <strong>Cancel Order</strong>
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
    console.log("handlePageChange ", params);
    if (params.paginationMode === "server") {
      this.setState((state) => {
        if (state.page !== params.page) {
          this.props.getOrders({
            fromDate: this.props.fromDate,
            toDate: this.props.toDate,
            page: params.page,
            pageLimit: this.props.pageLimit,
          });
        }
        return { page: params.page };
      });
    }
  }

  handleCancelOrder(params) {
    console.log("handleCancelOrder", params);
    this.setState({ loading: true });
    this.props.cancelOrder({
      cancelData: {
        orderId: params.getValue("id"),
        orderStatus: OrderRequestStatus.CANCEL,
      },
      getOrderData: {
        fromDate: this.props.fromDate,
        toDate: this.props.toDate,
        page: this.state.page,
        pageLimit: this.props.pageLimit,
      },
    });
    this.setState({ loading: false });
  }

  render() {
    const { classes } = this.props;

    if (this.props.loadingStatus === LoadingStatus.LOADING_SUCCESS) {
      return (
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={this.props.data ? this.props.data : []}
            columns={this.columns}
            pageSize={this.props.pageLimit}
            checkboxSelection={false}
            rowCount={this.props.dataCount ? this.props.dataCount : 0}
            paginationMode="server"
            onPageChange={this.handlePageChange}
            loading={this.state.loading}
            className={classes.root}
            page={this.state.page}
          />
        </div>
      );
    } else {
      return <NoDataDisplay />;
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(OrderDataTable));
