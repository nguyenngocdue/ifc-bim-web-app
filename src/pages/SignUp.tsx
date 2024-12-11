import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-lg p-6">
        {/* Header */}
        <CardHeader className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Sign Up</h2>
          <p className="text-sm text-gray-500 mt-2">
            Create a new account to start using our services.
          </p>
        </CardHeader>

        {/* Form Body */}
        <div className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full border-gray-300 rounded-md"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border-gray-300 rounded-md"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full border-gray-300 rounded-md"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              className="w-full border-gray-300 rounded-md"
            />
          </div>

          {/* Sign-Up Button */}
          <Button className="w-full bg-green-500 text-white hover:bg-green-600">
            Sign Up
          </Button>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
