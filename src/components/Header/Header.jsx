import React, { Component } from "react";
import Sidebar from "../SideBar/Sidebar";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            OMS Dashboard
          </a>
        </div>
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <ul className="nav navbar-nav navbar-left navbar-top-links">
          <li>
            <a href="as">
              <i className="fa fa-home fa-fw" /> Website
            </a>
          </li>
        </ul>
        <ul className="nav navbar-right navbar-top-links">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="as">
              <i className="fa fa-user fa-fw" /> windula <b className="caret" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="asd">
                  <i className="fa fa-user fa-fw" /> User Profile
                </a>
              </li>
              <li>
                <a href="as">
                  <i className="fa fa-gear fa-fw" /> Settings
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="login.html">
                  <i className="fa fa-sign-out fa-fw" /> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <Sidebar />
      </nav>
    );
  }
}
