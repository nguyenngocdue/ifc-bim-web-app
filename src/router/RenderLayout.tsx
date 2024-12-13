// src/router/RenderLayout.tsx
import React from "react";
import DefaultLayout from "../components/app/layout/DefaultLayout";
import AuthLayout from "../components/app/layout/AuthLayout";
import ViewerLayout from "../components/app/layout/ViewerLayout";

type LayoutType = "DefaultLayout" | "AuthLayout" | "ViewerLayout";

interface RenderLayoutProps {
  layout: LayoutType;
  children: React.ReactNode; // Bắt buộc truyền `children`
}

const RenderLayout: React.FC<RenderLayoutProps> = ({ layout, children }) => {
  switch (layout) {
    case "AuthLayout":
      return <AuthLayout>{children}</AuthLayout>;
    case "ViewerLayout":
      return <ViewerLayout>{children}</ViewerLayout>;
    case "DefaultLayout":
    default:
      return <DefaultLayout>{children}</DefaultLayout>;
  }
};

export default RenderLayout;
