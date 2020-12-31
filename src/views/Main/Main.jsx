import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar2 from "../../components/SideBar/Sidebar2";
import ViewOrders from "../Order/ViewOrder/ViewOrders";
import "../../resources/css/bootstrap-grid.min.css";
import "../../resources/css/bootstrap-reboot.min.css";
import "../../resources/css/bootstrap.min.css";
import "../../resources/css/font-awesome.min.css";
import "../../resources/css/metisMenu.min.css";
import "../../resources/css/startmin.css";
import Home from "../Home/home";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="wrapper">
        <Header />
        <Sidebar2 />
        <main id="page-wrapper" style={{ minHeight: "523px" }}>
          <div className=" container-fluid">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/oms/orders" component={ViewOrders} />
                <Route />
              </Switch>
            </BrowserRouter>
          </div>
        </main>
      </div>
    );
  }
}

export default connect(null, null)(Main);
