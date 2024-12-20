// src/components/app/layout/ViewerLayout.tsx
import React from "react";

const ViewerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
        <main className="flex-1">{children}</main>
    </>
  );
};

export default ViewerLayout;
