
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGenerateAd = () => {
    navigate('/dashboard');
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SillyAdLab</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
            
            {/* Authentication Controls */}
            <SignedOut>
              <button 
                onClick={handleSignIn}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Login
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </SignedIn>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <SignedOut>
              <Button 
                onClick={handleSignIn}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎨 Generate a Silly Ad
              </Button>
            </SignedOut>
            <SignedIn>
              <Button 
                onClick={handleGenerateAd}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎨 Generate a Silly Ad
              </Button>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
              
              <SignedOut>
                <button 
                  onClick={handleSignIn}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-left"
                >
                  Login
                </button>
                <Button 
                  onClick={handleSignIn}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full mt-4"
                >
                  🎨 Generate a Silly Ad
                </Button>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-3">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                  <span className="text-gray-700">My Account</span>
                </div>
                <Button 
                  onClick={handleGenerateAd}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full mt-4"
                >
                  🎨 Generate a Silly Ad
                </Button>
              </SignedIn>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
