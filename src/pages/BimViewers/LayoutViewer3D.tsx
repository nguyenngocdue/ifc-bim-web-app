// src/pages/BimViewers/LayoutViewer3D.tsx
import CustomSidebar from "@/components/app/layout/CustomSidebar";
import React from "react";

const LayoutViewer3D: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
      <CustomSidebar>{children}</CustomSidebar>
  );
};

export default LayoutViewer3D;
