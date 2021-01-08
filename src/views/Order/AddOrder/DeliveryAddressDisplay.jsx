import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React, { Component } from "react";
import { connect } from "react-redux";
import AlertMessage from "../../../components/Common/NetworkError";
import { LoadingStatus } from "../../../rootReducer/actions";

class DeliveryAddressDisplay extends Component {
  constructor(props) {
    super(props);

    this.props.getUserAddress();
  }

  handleRadioSelect = (evt) => {
    console.log(evt.target.value);
    // this.setState({ selectedUserAddress: evt.target.value });
    this.props.addUserAddressId(evt.target.value);
  };

  render() {
    if (this.props.loadingStatusUserAddress === LoadingStatus.LOADING_SUCCESS) {
      return (
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="delivery"
            name="delivery"
            value={this.props.userAddressId}
            onChange={this.handleRadioSelect}
            style={{ fontSize: "18px !important" }}
          >
            {this.props.userAddressData.map((val, ind) => {
              return (
                <FormControlLabel
                  key={ind}
                  value={val.userAddressId.toString()}
                  control={<Radio />}
                  label={val.userAddress}
                  className="delivery-display"
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      );
    } else if (
      this.props.loadingStatusUserAddress === LoadingStatus.LOADING_STARTED
    ) {
      return (
        <div className="row">
          <div className="col">Loading</div>
          <div className="col">
            <CircularProgress />
          </div>
        </div>
      );
    } else return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  loadingStatusUserAddress: state.addOrderFormData.loadingStatusProducts,
  userAddressData: state.addOrderFormData.userAddressData,
  userAddressId: state.addOrderFormData.userAddressId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAddress: () => {
      dispatch({ type: "GET_USER_ADDRESS_DATA", payload: 1 });
    },
    addUserAddressId: (data) => {
      dispatch({ type: "ADD_USER_ADDRESS_DATA", userAddressId: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryAddressDisplay);
