
import Dashboard from "../views/Dashboard";
import Allpropertys from '../views/Allproperty'

var OwnerDashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/All-propertys",
    name: "All-propertys",
    icon: "files_paper",
    component: Allpropertys,
    layout: "/admin",
  },
];
export default OwnerDashRoutes;
