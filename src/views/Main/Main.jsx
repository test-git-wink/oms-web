import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import "../../resources/css/bootstrap-grid.min.css";
import "../../resources/css/bootstrap-reboot.min.css";
import "../../resources/css/bootstrap.min.css";
import "../../resources/css/font-awesome.min.css";
import "../../resources/css/metisMenu.min.css";
import "../../resources/css/startmin.css";
import "../../resources/css/style.css";
import Home from "../Home/home";
import ViewOrders from "../Order/ViewOrder/ViewOrders";
import AddOrder from "../Order/AddOrder/AddOrder";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="wrapper">
        <BrowserRouter>
          <Header />

          <main id="page-wrapper" style={{ minHeight: "1080px" }}>
            <div className=" container-fluid">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/oms/orders/view" component={ViewOrders} />
                <Route exact path="/oms/orders/add" component={AddOrder} />
                <Route />
              </Switch>
            </div>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, null)(Main);
