/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { Component } from "react";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  }
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
              <li className="button-container">
              <a
                href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=nudr-fixed-plugin"
                target="_blank"
                className="btn btn-primary btn-block btn-round"
              >
                Home
              </a>
              <a
                href="https://www.creative-tim.com/product/now-ui-dashboard-react?ref=nudr-fixed-plugin"
                target="_blank"
                className="btn btn-warning btn-block btn-round"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
