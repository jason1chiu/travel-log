import React from "react";

import { Icon } from "@chakra-ui/react";

import { MdHome, MdSettings } from "react-icons/md";

import Overview from "views/admin/overview";
import SignIn from "views/auth/signIn/SignInCentered";
import SignUp from "views/auth/signUp/SignUpCentered";
import AccountSettings from "views/admin/settings/account/index"

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
    name: "Profile Settings",
    layout: "/admin",
    path: "/profile-settings",
    icon: <Icon as={MdSettings} width='20px' height='20px' color='inherit' />,
    component: AccountSettings,
  },
  {
    name: "Account Settings",
    layout: "/admin",
    path: "/account-settings",
    icon: <Icon as={MdSettings} width='20px' height='20px' color='inherit' />,
    component: AccountSettings,
  }
];

const sidebarRoutes = routes.filter(route => route.name !== "Sign In" && route.name !== "Sign Up");

export default routes;
export { sidebarRoutes };