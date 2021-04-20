
import Dashboard from "views/Dashboard.js";
import Allpropertys from './views/Allproperty'


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/owner",
  },
  {
    path: "/All-propertys",
    name: "All-propertys",
    icon: "files_paper",
    component: Allpropertys,
    layout: "/owner",
  }
];
export default dashRoutes;
