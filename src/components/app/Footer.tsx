import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 The BIM3DM. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-lime-400">Privacy Policy</a>
          <a href="#" className="hover:text-lime-400">Terms of Service</a>
          <a href="#" className="hover:text-lime-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
