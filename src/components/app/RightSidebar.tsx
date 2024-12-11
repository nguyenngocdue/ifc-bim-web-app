import React from "react";

const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden md:block col-span-2 bg-white shadow-lg rounded-lg p-4 overflow-y-auto">
      <h2 className="font-semibold text-lg mb-4">Right Sidebar</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-200 p-2 rounded">Notifications</li>
        <li className="hover:bg-gray-200 p-2 rounded">Messages</li>
        <li className="hover:bg-gray-200 p-2 rounded">Tasks</li>
        <li className="hover:bg-gray-200 p-2 rounded">Support</li>
      </ul>
    </aside>
  );
};

export default RightSidebar;
