// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router/routesConfig";
import RenderLayout from "./router/RenderLayout";
import Header from "./components/app/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-14">
        <Router>
          <Routes>
            {routes.map(({ path, element: Component, layout }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <RenderLayout layout={layout}>
                    <Component />
                  </RenderLayout>
                }
              />
            ))}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
