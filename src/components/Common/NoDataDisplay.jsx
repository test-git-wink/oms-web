import React, { Component } from "react";
import NoData from "../../resources/images/cancel.svg";

export default class NoDataDisplay extends Component {
  render() {
    return (
      <div style={{ height: 500, width: "100%" }}>
        <div className="row">
          <div className="col">
            <h2 className="mb-4">
              <strong>No data to display</strong>
            </h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <img src={NoData} alt="No data to display" width="300px" />
          </div>
        </div>
      </div>
    );
  }
}
