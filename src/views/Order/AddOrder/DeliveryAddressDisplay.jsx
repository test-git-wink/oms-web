import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React, { Component } from "react";
import { connect } from "react-redux";

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
    return (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="delivery"
          name="delivery"
          value={this.props.userAddressId}
          onChange={this.handleRadioSelect}
        >
          {this.props.userAddressData.map((val, ind) => {
            return (
              <FormControlLabel
                key={ind}
                value={val.userAddressId.toString()}
                control={<Radio />}
                label={val.userAddress}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
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
