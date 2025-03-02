// src/components/app/layout/AuthLayout.tsx
import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Content */}
      {children}
    </div>
  );
};

export default AuthLayout;
