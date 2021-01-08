import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import OrderItemDisplayTable from "./OrderItemDisplayTable";
import { isValidNumber } from "../../../validation/orderValidation";
import { connect } from "react-redux";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class AddOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: "",
      selectedQuantity: 0,
      selectedProductUnit: "",
      selectedProductName: "",
      quantityErrorState: false,
    };
  }
  componentDidMount() {
    this.props.getProducts();
  }

  handleProductSelect = (evt) => {
    const val = this.props.productDisplay
      ? this.props.productDisplay.find(
          (ele) => ele.productId === evt.target.value
        )
      : "";

    this.setState({
      selectedProduct: evt.target.value,
      selectedProductUnit: val.prodMeasureUnit,
      selectedProductName: val.productName,
    });
  };

  handleProductQuantityAdd = (evt) => {
    if (isValidNumber(evt.target.value)) {
      this.setState({
        selectedQuantity: parseFloat(evt.target.value),
        quantityErrorState: false,
      });
    } else {
      this.setState({
        selectedQuantity: 0,
        quantityErrorState: true,
      });
    }
  };

  handleProductAdd = () => {
    if (this.state.selectedQuantity > 0 && this.state.selectedProduct !== "") {
      const item = {
        productId: this.state.selectedProduct,
        quantity: this.state.selectedQuantity,
        productName: this.state.selectedProductName,
      };
      this.props.addOrderItem(item);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Products *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.selectedProduct}
                onChange={this.handleProductSelect}
              >
                {this.props.productDisplay.map((val) => {
                  return (
                    <MenuItem key={val.productId} value={val.productId}>
                      {val.productName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="quantity"
                value={this.state.selecttedQuantity}
                onChange={this.handleProductQuantityAdd}
                error={this.state.quantityErrorState}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {this.state.selectedProductUnit}
                    </InputAdornment>
                  ),
                }}
                label="Quantity *"
              />
              <FormHelperText id="quantity-helper-text">
                {!this.state.quantityErrorState && (
                  <span>Enter Quantiry Required</span>
                )}
                {this.state.quantityErrorState && <span>Invalid Entry</span>}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className="my-5"
              onClick={this.handleProductAdd}
            >
              Add Item
            </Button>
          </Grid>
          <Grid item xs={11}>
            <OrderItemDisplayTable />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingStatusProducts: state.addOrderFormData.loadingStatusProducts,
  productDisplay: state.addOrderFormData.productData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: "GET_PRODUCT_DATA" });
    },
    addOrderItem: (data) => {
      dispatch({ type: "ADD_ORDER_ITEM_DATA", orderItem: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddOrderForm));
