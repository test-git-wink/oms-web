import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="container row">
        <div className="col-lg-12">
          <h1 class="page-header">Main</h1>
        </div>
      </div>
    );
  }
}
