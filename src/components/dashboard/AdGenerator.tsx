
import React, { useState } from 'react';
import InputSection from './InputSection';
import GeneratedAdsSection from './GeneratedAdsSection';
import EmptyState from './EmptyState';
import LoadingState from './LoadingState';

const AdGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAds, setGeneratedAds] = useState([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async (formData: any) => {
    setIsGenerating(true);
    setHasGenerated(false);
    
    // Simulate API call
    setTimeout(() => {
      const mockAds = [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
          tagline: 'This soap is so clean, even your sins will disappear!',
          concept: 'We imagined this ad as a superhero soap saving the world from dirt villains.'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
          tagline: 'Warning: May cause uncontrollable freshness!',
          concept: 'We imagined this ad as a medical warning label but for extreme cleanliness.'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
          tagline: 'From zero to hero in one wash!',
          concept: 'We imagined this ad as a before-and-after transformation story.'
        }
      ];
      
      setGeneratedAds(mockAds);
      setIsGenerating(false);
      setHasGenerated(true);
    }, 3000);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🎨 Ad Generator Lab
        </h1>
        <p className="text-lg text-gray-600">
          Turn your boring product into viral gold with AI-powered silliness
        </p>
      </div>

      {/* Input Section */}
      <InputSection onGenerate={handleGenerate} isGenerating={isGenerating} />

      {/* Content Area */}
      <div className="mt-12">
        {isGenerating && <LoadingState />}
        {!isGenerating && hasGenerated && generatedAds.length > 0 && (
          <GeneratedAdsSection ads={generatedAds} />
        )}
        {!isGenerating && !hasGenerated && <EmptyState />}
      </div>
    </div>
  );
};

export default AdGenerator;
