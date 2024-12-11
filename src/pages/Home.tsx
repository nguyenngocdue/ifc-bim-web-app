import React from "react";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Manage Your <span className="text-yellow-300">3D Projects</span> with Ease
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Discover the best tools to collaborate on your 3D projects and ensure secure data management.
            </p>
            <div className="space-x-4">
              <Button className="bg-yellow-300 text-blue-900 hover:bg-yellow-400 px-6 py-3">
                <a href="/signin">Sign In</a>
              </Button>
              <Button className="bg-white text-blue-500 hover:bg-gray-100 px-6 py-3">
                <a href="/signup">Sign Up</a>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Hero Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300">
            <img
              src="https://via.placeholder.com/100"
              alt="Collaboration Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Easy Collaboration</h3>
            <p className="text-gray-600">
              Collaborate with your team in real time to manage projects effectively.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300">
            <img
              src="https://via.placeholder.com/100"
              alt="Tools Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Powerful Tools</h3>
            <p className="text-gray-600">
              Access advanced tools to work seamlessly with 3D data.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300">
            <img
              src="https://via.placeholder.com/100"
              alt="Secure Data Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
            <p className="text-gray-600">
              Your data is encrypted and secured with the latest technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
