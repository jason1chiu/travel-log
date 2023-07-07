import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdSettings,
} from "react-icons/md";

import Overview from "views/admin/overview";
import SignIn from "views/auth/signIn/SignInCentered";
import SignUp from "views/auth/signUp/SignUpCentered";
import Settings from "views/admin/settings";

const routes = [
  {
    name: "Overview",
    layout: "/admin",
    path: "/overview",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Overview,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    component: SignIn,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/sign-up",
    component: SignUp,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "/settings",
    icon: <Icon as={MdSettings} width='20px' height='20px' color='inherit' />,
    component: Settings,
  }
];

const sidebarRoutes = routes.filter(route => route.name !== "Sign In" && route.name !== "Sign Up");

export default routes;
export { sidebarRoutes };