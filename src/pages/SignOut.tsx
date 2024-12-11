import React from "react";
import { Button } from "@/components/ui/button";

const SignOut: React.FC = () => {
  const handleSignOut = () => {
    // Logic xử lý Sign-Out
    console.log("User signed out");
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Sign Out</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to sign out of your account?
        </p>
        <Button className="bg-red-500 text-white hover:bg-red-600 mr-4" onClick={handleSignOut}>
          Yes, Sign Out
        </Button>
        <Button className="bg-gray-300 text-gray-700 hover:bg-gray-400">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SignOut;
