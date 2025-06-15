
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anjali",
      role: "Indie Brand Owner",
      company: "Handmade Candles",
      quote: "I make handmade candles. My silly ad with a candle screaming during a blackout got 3X more clicks than my old Instagram posts!",
      avatar: "A",
      bgColor: "from-purple-500 to-pink-500"
    },
    {
      name: "Dev",
      role: "Foodpreneur",
      company: "Hot Sauce Brand",
      quote: "We used it for our hot sauce brand. One silly poster made it to 3 meme pages and doubled our traffic in 2 days.",
      avatar: "D",
      bgColor: "from-orange-500 to-red-500"
    },
    {
      name: "Sarah",
      role: "E-commerce Owner",
      company: "Quirky Accessories",
      quote: "Our boring product photos became hilarious ads that people actually save and share. Best marketing decision ever!",
      avatar: "S",
      bgColor: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ✅ Social Proof
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real brands who went from boring to viral
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Quote icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-6 h-6 text-purple-300" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-purple-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              😎 Let's Make Your Product Go Viral — the Funny Way.
            </h3>
            <p className="text-xl text-purple-100 mb-6">
              Try now. First ad is on us.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
