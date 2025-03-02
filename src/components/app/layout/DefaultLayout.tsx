// src/components/app/layout/DefaultLayout.tsx
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Content */}
      <main className="flex-1">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
