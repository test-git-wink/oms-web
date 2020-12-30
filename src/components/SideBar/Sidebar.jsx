import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
              {/* /input-group */}
            </li>
            <li>
              <a href="index.html" className="active">
                <i className="fa fa-dashboard fa-fw" /> Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-bar-chart-o fa-fw" /> Orders
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="flot.html">Add Order</a>
                </li>
                <li>
                  <a href="morris.html">Cancel Order</a>
                </li>
              </ul>
              {/* /.nav-second-level */}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
