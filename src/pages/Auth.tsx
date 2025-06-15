
import React from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">SillyAdLab</span>
          </div>
          <p className="text-gray-600">
            {isSignUp ? 'Create your account to start generating silly ads!' : 'Welcome back! Sign in to continue creating.'}
          </p>
        </div>

        {/* Auth Component */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          {isSignUp ? (
            <SignUp 
              redirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-0 p-0"
                }
              }}
            />
          ) : (
            <SignIn 
              redirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-0 p-0"
                }
              }}
            />
          )}
        </div>

        {/* Toggle between Sign In and Sign Up */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <Button
            variant="link"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
