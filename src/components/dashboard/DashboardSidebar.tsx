
import React, { useMemo } from 'react';
import { Settings, Heart, Image, LogOut, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import UserProfileSidebar from './UserProfileSidebar';

const navItems = [
  {
    icon: Sparkles,
    label: 'Generate New Ad',
    to: '/dashboard',
  },
  {
    icon: Image,
    label: 'My Ads',
    to: '/dashboard/my-ads',
  },
  {
    icon: Heart,
    label: 'Favorites',
    to: '/dashboard/favorites',
  },
  {
    icon: Settings,
    label: 'Settings',
    to: '/dashboard/settings',
  },
];

const DashboardSidebar = () => {
  const location = useLocation();

  // Placeholder sign out handler (not functional since there's no auth)
  const handleSignOut = () => {
    // No-op
  };

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

      {/* User Profile from Clerk */}
      <UserProfileSidebar />

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end={item.to === '/dashboard'}
            className={({ isActive }) =>
              `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                isActive || (item.to === '/dashboard' && location.pathname === '/dashboard')
                  ? 'bg-gradient-to-r from-teal-100 to-yellow-100 text-teal-700 font-semibold border-2 border-teal-200'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button (nonfunctional) */}
      <div className="absolute bottom-6 left-4 right-4">
        <Button 
          onClick={handleSignOut}
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
