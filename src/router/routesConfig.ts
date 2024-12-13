// src/router/routesConfig.ts
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import HomeViewer from "../pages/BimViewers/HomeViewer";
import LayoutViewer3D from "../pages/BimViewers/LayoutViewer3D";

export const routes = [
  {
    path: "/",
    element: Home, // Không cần JSX ở đây
    layout: "DefaultLayout",
  },
  {
    path: "/viewer",
    element: HomeViewer,
    layout: "ViewerLayout",
  },
  {
    path: "/viewer3d",
    element: LayoutViewer3D,
    layout: "ViewerLayout",
  },
  {
    path: "/signin",
    element: SignIn,
    layout: "AuthLayout",
  },
  {
    path: "/signup",
    element: SignUp,
    layout: "AuthLayout",
  },
];
