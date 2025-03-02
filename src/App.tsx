// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router/routesConfig";
import RenderLayout from "./router/RenderLayout";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import HomeViewer from "./pages/BimViewers/HomeViewer";
import Viewer3D from "./pages/BimViewers/Viewer3D";
import WebglClipping from "./pages/BimViewers/WebglClipping";

// Layout chung với Header và Footer
const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

// Layout không có Header và Footer
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Các trang có Header và Footer */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />

        <Route path="/viewer" element={<HomeViewer />} />
        <Route path="/viewer3d" element={<Viewer3D />} />
        <Route path="/webgl_clipping" element={<WebglClipping />} />

        {/* Các trang không có Header và Footer */}
        <Route
          path="/signin"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
