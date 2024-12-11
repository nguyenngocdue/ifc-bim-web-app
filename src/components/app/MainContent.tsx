import React from "react";

const MainContent: React.FC = () => {
  return (
    <main className="col-span-12 md:col-span-8 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
      <p className="text-gray-700">
        This is the central body area where you can add your primary content,
        such as articles, features, or interactive elements.
      </p>
    </main>
  );
};

export default MainContent;
