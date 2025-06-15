
import React from 'react';
import { User, Settings, Heart, Image, LogOut, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardSidebar = () => {
  const navItems = [
    { icon: Sparkles, label: 'Generate New Ad', active: true },
    { icon: Image, label: 'My Ads' },
    { icon: Heart, label: 'Favorites' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-xl border-r-4 border-teal-300 z-40">
      {/* Logo Section */}
      <div className="p-6 border-b border-teal-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">SA</span>
          </div>
          <span className="text-xl font-bold text-gray-900">SillyAdLab</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-teal-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-yellow-400 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">John Creator</p>
            <p className="text-sm text-gray-500">Pro Member</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
              item.active
                ? 'bg-gradient-to-r from-teal-100 to-yellow-100 text-teal-700 font-semibold border-2 border-teal-200'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-6 left-4 right-4">
        <Button 
          variant="ghost" 
          className="w-full flex items-center space-x-2 text-gray-600 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
