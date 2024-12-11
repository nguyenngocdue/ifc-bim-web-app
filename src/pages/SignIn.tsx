import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

const SignIn: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-lg p-6">
        {/* Header */}
        <CardHeader className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <p className="text-sm text-gray-500 mt-2">
            Welcome back! Please sign in to your account.
          </p>
        </CardHeader>

        {/* Form Body */}
        <div className="space-y-6">
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
              placeholder="Enter your password"
              className="w-full border-gray-300 rounded-md"
            />
          </div>

          {/* Sign-In Button */}
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Sign In
          </Button>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
