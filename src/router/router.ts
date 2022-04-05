import React from "react";

export const Home =  React.lazy(() => import("../pages/home"));

export const About = React.lazy(()=> import("../pages/about"));

export const Menu = React.lazy(()=> import("../pages/menu"));

export const Cart = React.lazy(()=> import("../pages/cart"));

export const Profile = React.lazy(()=> import("../pages/profile"));

export const Contacts = React.lazy(()=> import("../pages/contacts"));