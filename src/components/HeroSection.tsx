
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-300 rounded-full opacity-25 animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-purple-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Viral Marketing Made Easy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-gray-900">Boring Ads Are</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Easy to Forget.
            </span>
            <br />
            <span className="text-gray-900">Silly Ones?</span>
            <span className="text-yellow-500"> Never.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Make your product the hero of a <span className="font-semibold text-purple-600">hilarious, scroll-stopping ad</span> people can't ignore.
            <br />
            Be remembered, be talked about, be shared — all in one click.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              <Zap className="w-5 h-5 mr-2" />
              Generate Your First Viral Ad — Free!
            </Button>
            <button className="text-purple-600 hover:text-purple-700 font-semibold text-lg underline underline-offset-4 transition-colors">
              See Examples →
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>No design skills needed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Results in 30 seconds</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>First ad is free</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-purple-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <p className="text-purple-700 font-medium text-lg">Your Silly Ad Preview</p>
                <p className="text-purple-600 text-sm mt-2">Upload your product to see the magic!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
