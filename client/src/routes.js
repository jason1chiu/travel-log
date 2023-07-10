import React from "react";

import { Icon } from "@chakra-ui/react";

import { MdBook, MdManageAccounts } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi"

import Overview from "views/admin/overview";
import SignIn from "views/auth/signIn/SignInCentered";
import SignUp from "views/auth/signUp/SignUpCentered";
import AccountSettings from "views/admin/settings/account"
import ProfileSettings from "views/admin/settings/profile"

const routes = [
  {
    name: "Profile",
    layout: "/admin",
    path: "/overview",
    icon: <Icon as={ BiUserCircle } width='20px' height='20px' color='inherit' />,
    component: Overview,
  },
  {
    name: "Travel Plans",
    layout: "/admin",
    path: "/travelplans",
    icon: <Icon as={ SiYourtraveldottv } width='20px' height='20px' color='inherit' />,
    component: Overview,
  },
  {
    name: "Travel Logs",
    layout: "/admin",
    path: "/travellogs",
    icon: <Icon as={MdBook} width='20px' height='20px' color='inherit' />,
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
    icon: <Icon as={ FaUserEdit } width='20px' height='20px' color='inherit' />,
    component: ProfileSettings,
  },
  {
    name: "Account Settings",
    layout: "/admin",
    path: "/account-settings",
    icon: <Icon as={ MdManageAccounts } width='20px' height='20px' color='inherit' />,
    component: AccountSettings,
  }
];

const sidebarRoutes = routes.filter(route => route.name !== "Sign In" && route.name !== "Sign Up");

export default routes;
export { sidebarRoutes };