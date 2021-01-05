import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddOrderForm from "./AddOrderForm";
import DeliveryAddressDisplay from "./DeliveryAddressDisplay";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // backgroundColor: "#a0d2eb",
  },
});

class AddOrder extends Component {
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
            <Grid container spacing={3} className={classes.root} xs={12}>
              <Grid item xs={8}>
                <AddOrderForm />
              </Grid>
              <Grid item xs={4}>
                <div className="row">
                  <h4 className="">
                    <strong>Select Delivery Address</strong>{" "}
                  </h4>
                </div>
                <Grid item xs={12}>
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
                  >
                    Place Order
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(AddOrder);
