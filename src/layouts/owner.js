import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Switch, Redirect } from "react-router-dom";

// core components
import DemoOwnerNav from "components/Navbars/DemoOwnerNav";
import Footer from "components/Footer/Footer.js";
import SidebarOwner from "components/Sidebar/SidebarOwner"
import FixedPluginOwner from "components/FixedPlugin/FixedPluginOwner";

import dashRoutes from "routesOwner.js";

var ps;

class OwnerDashboard extends React.Component {
  state = {
    backgroundColor: "green",
  };
  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  handleColorClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <SidebarOwner
          {...this.props}
          routesOwner={dashRoutes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoOwnerNav {...this.props} />
          <Switch>
            {dashRoutes.map((prop, key) => {
              return (
                <routesOwner
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/owner" to="/owner/dashboard" />
          </Switch>
          <Footer fluid />
        </div>
        <FixedPluginOwner
          bgColor={this.state.backgroundColor}
          handleColorClick={this.handleColorClick}
        />
      </div>
    );
  }
}

export default OwnerDashboard;
