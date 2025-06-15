
import React from 'react';

const LoadingState = () => {
  const loadingMessages = [
    "Cooking your ad with extra cheese 🧀...",
    "Adding a sprinkle of chaos ✨...",
    "Teaching your product to be funny 🎭...",
    "Consulting the meme council 🧙‍♂️...",
    "Generating maximum silliness 🤪..."
  ];

  const [currentMessage, setCurrentMessage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-16">
      <div className="max-w-lg mx-auto">
        {/* Animated Character */}
        <div className="relative mb-8">
          <div className="text-8xl animate-bounce">
            🍳
          </div>
          <div className="absolute -top-4 -right-4 text-4xl animate-pulse">
            ✨
          </div>
          <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse delay-300">
            💫
          </div>
        </div>

        {/* Loading Message */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Creating Your Masterpiece!
          </h3>
          
          <div className="h-8 flex items-center justify-center">
            <p className="text-lg text-gray-700 animate-pulse">
              {loadingMessages[currentMessage]}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-400 to-yellow-400 h-full rounded-full animate-pulse">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-ping"></div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            This usually takes 2-3 seconds, but great art can't be rushed! 🎨
          </p>
        </div>

        {/* Fun Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
