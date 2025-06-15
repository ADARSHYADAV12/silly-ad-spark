
import React from 'react';

const EmptyState = () => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        {/* Fun Character */}
        <div className="text-8xl mb-6">
          🧑‍🎨
        </div>
        
        {/* Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed border-teal-300 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Magic? ✨
          </h3>
          <p className="text-lg text-gray-600 mb-2">
            "Waiting to turn your boring product into ad gold..."
          </p>
          <p className="text-sm text-gray-500">
            Upload your product image and let's make something ridiculous together!
          </p>
        </div>

        {/* Fun Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-yellow-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-700">1M+</div>
            <div className="text-xs text-yellow-600">Laughs Generated</div>
          </div>
          <div className="bg-teal-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-700">99.9%</div>
            <div className="text-xs text-teal-600">Silliness Rate</div>
          </div>
          <div className="bg-pink-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-pink-700">∞</div>
            <div className="text-xs text-pink-600">Viral Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
