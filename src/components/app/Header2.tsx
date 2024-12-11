// src/components/Header.tsx

import { Button } from "../ui/button";

const Header2 = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://viewer.autodesk.com/assets/images/common/logo-viewer.svg"
          alt="Autodesk Viewer"
          className="h-6"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-3">
        <Button variant="outline" className="text-gray-600 border-gray-300">
          <a href="/signin">Sign in</a> 
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <a className="text-white" href="/signup">Sign up for free</a> 
        </Button>
      </div>
    </header>
  );
};

export default Header2;
