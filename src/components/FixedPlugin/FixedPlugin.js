
/*eslint-disable*/
import React, { Component } from "react";
import Notifications from "../../views/feedback";
import {Link} from 'react-router-dom';


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
          <ul className="dropdown-menu show col-sm-6">
              <li className="button-container" style={{padding:'none'}}>
              <Link
                to="/admin/dashboard"
                className="btn btn-primary btn-block btn-round"
              >
                Home
              </Link>
              <Link
                to="/admin/notifications"
                className="btn btn-warning btn-block btn-round col-sm-12"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
