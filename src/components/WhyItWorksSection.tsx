
import React from 'react';
import { TrendingUp, Share2, Brain, DollarSign } from 'lucide-react';

const WhyItWorksSection = () => {
  const examples = [
    {
      brand: "Old Spice",
      description: "\"The Man Your Man Could Smell Like\"",
      detail: "A wild, shirtless man on a horse. It was absurd. It also turned Old Spice from \"dad brand\" to cool and viral.",
      result: "Sales went up 125% in 1 year.",
      color: "from-red-500 to-orange-500"
    },
    {
      brand: "Dollar Shave Club",
      description: "Funny launch video",
      detail: "Their ad was low-budget and full of jokes — \"Our blades are f**king great.\"",
      result: "12,000 orders in 48 hours, sold for $1 Billion.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      brand: "Poo-Pourri",
      description: "Toilet spray + British woman + toilet humor",
      detail: "A product nobody wanted to talk about suddenly became a household name.",
      result: "40M+ views.",
      color: "from-purple-500 to-pink-500"
    },
    {
      brand: "Squatty Potty",
      description: "Unicorn Poop Ad",
      detail: "A unicorn pooping rainbow ice cream. People couldn't stop laughing or sharing.",
      result: "Sales went up 600%.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: Share2,
      title: "Be shared like a meme",
      description: "Viral content spreads faster than traditional ads"
    },
    {
      icon: Brain,
      title: "Stick in people's heads like a jingle",
      description: "Memorable ads create lasting brand recall"
    },
    {
      icon: TrendingUp,
      title: "Make your weird product loveable",
      description: "Humor makes any product more approachable"
    },
    {
      icon: DollarSign,
      title: "Turn browsers into fans, fans into buyers",
      description: "Emotional connection drives purchase decisions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            💥 Why This Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            People don't remember perfect ads. They remember the weird, funny, and totally unexpected ones.
            <br />
            <span className="font-semibold text-purple-600">That's what makes them share it. Laugh at it. And buy it.</span>
          </p>
        </div>

        {/* Real Examples */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🤯 Real Brands That Did It:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className={`w-full h-2 bg-gradient-to-r ${example.color} rounded-full mb-4`}></div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{example.brand}</h4>
                <p className="text-purple-600 font-semibold mb-3">{example.description}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{example.detail}</p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-500">
                  <p className="text-green-700 font-semibold">📈 {example.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What This Means for You */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🧠 What That Means for YOU
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🤑 More laughter = More shares = More reach = More sales.
            </h3>
            <p className="text-purple-100 text-lg">
              Stop being forgettable. Start being unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
