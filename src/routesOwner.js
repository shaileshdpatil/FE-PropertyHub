import DisplayProperty from './OwnerPages/DisplayProperty'
import inquiry from './OwnerPages/inquiry';
import reviews from './OwnerPages/review';
import OwnerProfile from './OwnerPages/OwnerProfile';

var dashRoutes = [
  {
    path: "/Dashboard",
    name: "Your Propertys",
    icon: "business_briefcase-24",
    component: DisplayProperty,
    layout: "/owner",
  },
  {
    path: "/All-inquerys",
    name: "All inquerys",
    icon: "design_bullet-list-67",
    component: inquiry,
    layout: "/owner",
  },
  {
    path: "/All-Reviews",
    name: "All Reviews",
    icon: "business_badge",
    component: reviews,
    layout: "/owner",
  },
  {
    path: "/Your-Profile",
    name: "Your-Profile",
    icon: "users_single-02",
    component: OwnerProfile,
    layout: "/owner",
  },
];
export default dashRoutes;
