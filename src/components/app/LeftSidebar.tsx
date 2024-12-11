import React from "react";

const LeftSidebar: React.FC = () => {
  return (
    <aside className="hidden md:block col-span-2 bg-white shadow-lg rounded-lg p-4 overflow-y-auto">
      <h2 className="font-semibold text-lg mb-4">Left Sidebar</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-200 p-2 rounded">Dashboard</li>
        <li className="hover:bg-gray-200 p-2 rounded">Settings</li>
        <li className="hover:bg-gray-200 p-2 rounded">Analytics</li>
        <li className="hover:bg-gray-200 p-2 rounded">Profile</li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
