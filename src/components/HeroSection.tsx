import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Boring Ads Are Easy to Forget.
            </span>
            <br />
            <span className="text-gray-900">Silly Ones? Never.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Make your product the hero of a hilarious, scroll-stopping ad people can't ignore.<br />
            <span className="font-semibold text-purple-700">Be remembered, be talked about, be shared — all in one click.</span>
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🎨 Generate Your First Viral Ad — Free!
            </Button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-gray-600">Silly Ads Created</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200">
              <div className="text-3xl font-bold text-pink-600 mb-2">5x</div>
              <div className="text-gray-600">More Shares</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">99%</div>
              <div className="text-gray-600">Laughter Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce delay-1000">🎨</div>
      <div className="absolute top-40 right-20 text-3xl animate-bounce delay-2000">💡</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-bounce delay-3000">🚀</div>
      <div className="absolute bottom-40 right-10 text-4xl animate-bounce delay-4000">✨</div>
    </section>
  );
};

export default HeroSection;
