
import Dashboard from "views/Dashboard.js";
import Notifications from "views/feedback";
// import Typography from "views/Typography.js";
// import TableList from "views/TableList.js";
import OwnerManage from "views/OwnerManege";
import Maps from "views/Maps.js";
// import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Allpropertys from './views/Allproperty'
import Packages from './views/allpackages' 
import category from './views/category';
import subcategory from './views/subcategory';
import city from "./views/city";
import state from "./views/state"

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
    path: "/All-propertys",
    name: "All-propertys",
    icon: "files_paper",
    component: Allpropertys,
    layout: "/admin",
  },
  // {
  //   path: "/extended-tables",
  //   name: "Total Deals",
  //   icon: "business_briefcase-24",
  //   component: TableList,
  //   layout: "/admin",
  // },
  {
    path: "/owner-manage",
    name: "Manage owners",
    icon: "business_badge",
    component: OwnerManage,
    layout: "/admin",
  },
  {
    path: "/all-packages",
    name: "all-packages",
    icon: "design_bullet-list-67",
    component: Packages,
    layout: "/admin",
  },
  {
    path: "/categorys",
    name: "all-category",
    icon: "education_agenda-bookmark",
    component: category,
    layout: "/admin",
  },
  {
    path: "/sub-categorys",
    name: "sub-category",
    icon: "business_chart-bar-32",
    component: subcategory,
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
    path: "/state",
    name: "state",
    icon: "location_world",
    component: state,
    layout: "/admin",
  },
  {
    path: "/city",
    name: "city",
    icon: "travel_istanbul",
    component: city,
    layout: "/admin",
  },
  // {
  //   path: "/user-page",
  //   name: "Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
];
export default dashRoutes;
