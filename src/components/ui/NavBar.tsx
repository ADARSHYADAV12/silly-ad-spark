import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-3 bg-white shadow-md border-b border-gray-100 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SA</span>
          </div>
          <span className="text-xl font-extrabold text-gray-900">SillyAdLab</span>
        </Link>
      </div>
      {/* Center Links */}
      <div className="flex items-center space-x-8">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}>
          Home
        </NavLink>
        <NavLink to="/how-it-works" className={({ isActive }) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}>
          How it Works
        </NavLink>
        <NavLink to="/pricing" className={({ isActive }) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}>
          Pricing
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}>
          FAQ
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}>
          Login
        </NavLink>
      </div>
      {/* CTA Button */}
      <div>
        <Link to="/dashboard" className="px-6 py-2 rounded-full font-semibold shadow bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center gap-2 hover:from-pink-500 hover:to-purple-500 transition-all">
          <span role="img" aria-label="magic">✨</span> Generate a Silly Ad
        </Link>
      </div>
    </nav>
  );
}
