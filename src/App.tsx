import React from 'react';
import Header from './components/app/Header';
import LeftSidebar from './components/app/LeftSidebar';
import MainContent from './components/app/MainContent';
import RightSidebar from './components/app/RightSidebar';
import Footer from './components/app/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-screen px-4 bg-gray-100">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <MainContent />

        {/* Right Sidebar */}
        <RightSidebar />

        {/* Footer */}
      </div>
        <Footer />
    </div>
  );
}

export default App;
