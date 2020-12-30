import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/home";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import Sidebar2 from "../../components/SideBar/Sidebar2";
import "../../resources/css/bootstrap.min.css";
import "../../resources/css/bootstrap-grid.min.css";
import "../../resources/css/bootstrap-reboot.min.css";
import "../../resources/css/metisMenu.min.css";
import "../../resources/css/startmin.css";
import "../../resources/css/font-awesome.min.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <Header />
          <Sidebar2 />
          <main id="page-wrapper" style={{ "min-height": "523px" }}>
            <div className=" container-fluid">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="oms/order" />
                <Route />
              </Switch>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
