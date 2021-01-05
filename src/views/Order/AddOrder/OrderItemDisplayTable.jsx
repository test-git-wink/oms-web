import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const rows = [
  { productId: "PROD_11223", quantity: 10, productName: "white rice" },
  { productId: "PROD_11224", productName: "white flour", quantity: 10 },
];

export default class OrderItemDisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="center">Product ID</TableCell>
              <TableCell align="center">Quantiry</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.productId}>
                <TableCell align="left">{row.productName}</TableCell>
                <TableCell align="center">{row.productId}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
