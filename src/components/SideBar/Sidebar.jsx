import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      active: "Main",
      clicked: false,
    };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }
  handleLinkClick(evt, val) {
    this.setState({
      active: val,
      clicked: !this.state.clicked,
    });
    evt.preventDefault();
  }
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
            </li>
            <li>
              <a
                href="/"
                className={`${this.state.active === "Main" ? "active" : ""}`}
                onClick={(e) => this.handleLinkClick(e, "Main")}
              >
                <i className="fa fa-dashboard fa-fw" /> Main
              </a>
            </li>
            <li
              className={`${
                this.state.active === "Orders" && this.state.clicked
                  ? "active"
                  : ""
              }`}
            >
              <a
                href="/oms/orders"
                className={`${this.state.active === "Orders" ? "active" : ""}`}
                onClick={(e) => this.handleLinkClick(e, "Orders")}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> Orders
                <span className="fa arrow" />
              </a>
              <ul
                // className="nav nav-second-level collapse"
                className={`nav nav-second-level ${
                  this.state.active === "Orders" && this.state.clicked
                    ? "collapse-in"
                    : "collapse"
                }`}
              >
                <li>
                  <Link to="/oms/orders/view">View Order</Link>
                </li>
                <li>
                  <Link to="/oms/orders/add">Add Order</Link>
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
