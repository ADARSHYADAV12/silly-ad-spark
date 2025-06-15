
import React, { useState } from 'react';
import InputSection from './InputSection';
import GeneratedAdsSection from './GeneratedAdsSection';
import EmptyState from './EmptyState';
import LoadingState from './LoadingState';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const AdGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAds, setGeneratedAds] = useState([]);
  const [hasGenerated, setHasGenerated] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (formData: any) => {
    setIsGenerating(true);
    setHasGenerated(false);
    
    try {
      console.log('Calling generate-silly-ad function with:', formData);
      
      const { data, error } = await supabase.functions.invoke('generate-silly-ad', {
        body: {
          productName: formData.productName,
          description: formData.description,
          style: formData.style
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Function response:', data);
      
      if (data && data.ads) {
        setGeneratedAds(data.ads);
        setHasGenerated(true);
        toast({
          title: "🎉 Ads Generated!",
          description: "Your silly ads are ready! Scroll down to see them.",
        });
      } else {
        throw new Error('No ads returned from the function');
      }
      
    } catch (error) {
      console.error('Error generating ads:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "We couldn't generate your ads right now. Please try again!",
        variant: "destructive",
      });
      
      // Fallback to mock data if the API fails
      const mockAds = [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
          tagline: `${formData.productName}: So good, even your pets will be jealous!`,
          concept: `We imagined this ad as ${formData.productName} being so amazing that it creates a new category of envy.`
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
          tagline: `Warning: ${formData.productName} may cause uncontrollable happiness!`,
          concept: `We imagined this ad as a medical warning label, but for extreme satisfaction.`
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
          tagline: `From zero to hero with ${formData.productName}!`,
          concept: `We imagined this ad as a superhero origin story, but for everyday products.`
        }
      ];
      
      setGeneratedAds(mockAds);
      setHasGenerated(true);
    } finally {
      setIsGenerating(false);
    }
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
