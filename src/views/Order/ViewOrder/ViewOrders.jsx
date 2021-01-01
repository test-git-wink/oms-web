import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import OrderDataTable from "./OrderDataTable";
import { connect } from "react-redux";
import format from "date-fns/format";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // backgroundColor: "#a0d2eb",
  },
});

class ViewOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: format(new Date(), "yyyy-MM-dd"),
      toDate: format(new Date(), "yyyy-MM-dd"),
      page: 0,
      pageLimit: 5,
    };
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.handleSearchOrders = this.handleSearchOrders.bind(this);
  }

  handleFromDateChange(date, value) {
    this.setState((state) => ({ fromDate: value }));
  }
  handleToDateChange(date, value) {
    this.setState((state) => ({ toDate: value }));
  }
  handleSearchOrders() {
    this.props.getOrders({
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
      page: this.state.page,
      pageLimit: this.state.pageLimit,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="container-fluid">
        <div className=" row">
          <div className="col-lg-12">
            <h1 className="page-header">View Orders</h1>
          </div>
        </div>
        <Container maxWidth="xl">
          <Paper className={classes.paper}>
            <Grid container spacing={5} className={classes.root}>
              <Grid item lg={2}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy-MM-dd"
                    margin="normal"
                    id="date-picker-inline"
                    label="From Date"
                    value={this.state.fromDate}
                    onChange={this.handleFromDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item lg={2}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy-MM-dd"
                    margin="normal"
                    id="date-picker-inline"
                    label="To Date"
                    value={this.state.toDate}
                    onChange={this.handleToDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item lg={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={this.handleSearchOrders}
                >
                  Search
                </Button>
              </Grid>
              <Grid item lg={12}>
                <OrderDataTable
                  fromDate={this.state.fromDate}
                  toDate={this.state.toDate}
                  page={this.state.page}
                  pageLimit={this.state.pageLimit}
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (params) =>
      dispatch({ type: "GET_ORDER_DATA", payload: params }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ViewOrders));
