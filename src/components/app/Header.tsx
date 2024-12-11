import React from 'react';

function Header() {
    return (
        <div className="bg-gray-900 text-white px-6 py-2 grid grid-cols-3 items-center">
            {/* Logo Section (Left) */}
            <div className="flex items-center">
                <div className="w-8 h-8 bg-lime-500 rounded-full flex justify-center items-center">
                    <span className="text-gray-900 font-bold">O</span>
                </div>
                <span className="ml-2 font-semibold text-lime-400">
                    The <span className="text-white">BIM3DM</span>
                </span>
            </div>

            {/* Search Section (Center) */}
            <div className="relative mx-auto w-full">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-800 text-white rounded-md px-4 py-1 focus:outline-none w-full"
                />
                <kbd className="absolute right-2 top-1 text-gray-400 bg-gray-700 px-2 py-1 rounded text-xs">
                    CTRL K
                </kbd>
            </div>

            {/* Links Section (Right) */}
            <div className="flex justify-end items-center space-x-6">
                <a href="#" className="hover:text-lime-400 flex items-center space-x-1">
                    Project<span>↗</span>
                </a>
                <a href="#" className="hover:text-lime-400 flex items-center space-x-1">
                    Community<span>↗</span>
                </a>
                <a href="#" className="hover:text-lime-400 flex items-center space-x-1">
                    NPM<span>↗</span>
                </a>
                <a href="#" className="hover:text-lime-400 flex items-center space-x-1">
                    GitHub<span>↗</span>
                </a>
                <button className="bg-gray-700 hover:bg-gray-600 rounded-full p-2">
                    🌙
                </button>
            </div>
        </div>
    );
}

export default Header;
