import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { RemoveOrderItemsAction } from "./data/addOrderActions";

class OrderItemDisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleRemoveItem = (itemId) => {};

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="center">Product ID</TableCell>
              <TableCell align="center">Quantiry</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.productDisplay.map((row, ind) => (
              <TableRow key={ind}>
                <TableCell align="left">{row.productName}</TableCell>
                <TableCell align="center">{row.productId}</TableCell>
                <TableCell align="center">
                  {row.quantity + " " + row.productUnit}
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <strong>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: 16, background: "red" }}
                      onClick={() => this.props.deleteOrderItem(ind)}
                    >
                      <strong>Remove Item</strong>
                    </Button>
                  </strong>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  productDisplay: state.addOrderFormData.orderItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrderItem: (data) => {
      dispatch(RemoveOrderItemsAction(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItemDisplayTable);
