import Allpropertys from './views/Allproperty'

var dashRoutes = [
  {
    path: "/ownerdata",
    name: "Owner Data",
    icon: "files_paper",
    component: Allpropertys,
    layout: "/owner",
  },
];
export default dashRoutes;
