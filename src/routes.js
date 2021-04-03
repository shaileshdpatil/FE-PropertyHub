
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
// import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import OwnerManage from "views/OwnerManege";
import Maps from "views/Maps.js";
// import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  

  {
    path: "/extended-tables",
    name: "Total Deals",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/owner-manage",
    name: "Manage owners",
    icon: "files_paper",
    component: OwnerManage,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: "Feedback",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
];
export default dashRoutes;
