
/*eslint-disable*/
import React, { Component } from "react";
import Notifications from "../../views/feedback";
import {Link} from 'react-router-dom';


class FixedPluginOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown",
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
                to="/owner/dashboard"
                className="btn btn-primary btn-block btn-round"
              >
                Home
              </Link>
            
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPluginOwner;
