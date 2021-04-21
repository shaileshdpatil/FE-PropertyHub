import propertysOwner from './components/OwnerPages/views/allProperty.js'
import Dashboard from "views/Dashboard.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "All-propertys",
    icon: "files_paper",
    component: Dashboard,
    layout: "/owner",
  },
  {
    path: "/ownerdata",
    name: "All-propertys",
    icon: "files_paper",
    component: propertysOwner,
    layout: "/owner",
  }
];
export default dashRoutes;
