import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddOrderForm from "./AddOrderForm";
import DeliveryAddressDisplay from "./DeliveryAddressDisplay";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import OrderStatusDisplay from "./OrderStatusDisplay";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      orderStatus: "",
    };
  }

  handlePlaceOrder = () => {
    if (this.props.orderItems.length > 0 && this.props.userAddressId !== "") {
      const orderdata = this.props.orderItems.map((val, ind) => ({
        productId: val.productId,
        quantity: val.quantity,
      }));
      const request = {
        userId: this.state.userId,
        orderItemList: orderdata,
        orderStatus: "placed",
        userAddresID: this.props.userAddressId,
      };
      console.log("order request", request);
      this.props.postOrderData(request);
    } else {
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="container-fluid">
        <div className=" row">
          <div className="col-lg-12">
            <h1 className="page-header">Add Order</h1>
          </div>
        </div>
        <Container maxWidth="xl">
          <Paper className={classes.paper}>
            <Grid container spacing={3} className={classes.root}>
              <Grid item xs={8}>
                <AddOrderForm />
              </Grid>
              <Grid item xs={4}>
                <div className="row">
                  <h4 className="">
                    <strong>Select Delivery Address</strong>{" "}
                  </h4>
                </div>
                <Grid item xs={12} className="d-flex justify-content-start">
                  <DeliveryAddressDisplay />
                </Grid>
                <Grid item xs={12} className="my-5">
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                    style={{
                      // maxWidth: "30px",
                      // maxHeight: "30px",
                      minWidth: "130px",
                      minHeight: "50px",
                      fontSize: "2rem",
                      background: "#FFA500",
                    }}
                    onClick={this.handlePlaceOrder}
                  >
                    Place Order
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <OrderStatusDisplay />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userAddressId: state.addOrderFormData.userAddressId,
  orderItems: state.addOrderFormData.orderItems,
  placeOrderResponse: state.addOrderFormData.placeOrderResponse,
  loadingStatusOrderRequest: state.addOrderFormData.loadingStatusOrderRequest,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postOrderData: (data) => {
      dispatch({ type: "POST_ORDER_DATA", payload: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddOrder));
