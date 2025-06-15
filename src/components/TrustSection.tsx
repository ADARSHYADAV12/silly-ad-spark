
import React from 'react';
import { Heart, Coffee, Zap, Users } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Trust Message */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12 border border-purple-100">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trust + Human Vibe
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  🎉 No design skills? No problem.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This platform is built by people who've worked on real viral campaigns.
                  You give us the product. We give you the "Oh damn this is genius" ad.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  💸 It costs less than your coffee run.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  But if just one person shares your ad — it could be your biggest sales day.
                </p>
              </div>
            </div>
          </div>

          {/* Stats/Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">5,000+ Brands</h3>
              <p className="text-gray-600 text-sm">Already creating viral ads with us</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">30 Seconds</h3>
              <p className="text-gray-600 text-sm">Average time to create an ad</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">$3.99</h3>
              <p className="text-gray-600 text-sm">Less than your daily coffee</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to stop being boring?
              </h3>
              <p className="text-gray-800 mb-6 text-lg">
                Your first viral ad is just one click away.
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                Start Your Viral Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
