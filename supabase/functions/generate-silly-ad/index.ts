
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not found');
    }

    const { productName, description, style } = await req.json();
    
    console.log('Generating ad for:', { productName, description, style });

    // Create different prompts based on style
    let stylePrompt = '';
    switch (style) {
      case 'cartoon':
        stylePrompt = 'cartoon-style, colorful, playful, with exaggerated features';
        break;
      case 'retro':
        stylePrompt = 'retro 1950s advertisement style, vintage colors, classic typography';
        break;
      case 'random':
        stylePrompt = 'completely random and unexpected style, surprise me';
        break;
      default:
        stylePrompt = 'fun and engaging';
    }

    // Generate silly taglines using OpenAI
    const taglineResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a creative copywriter who specializes in making hilariously silly and memorable advertising taglines. Your job is to take boring products and make them sound ridiculously amazing. Be playful, unexpected, and slightly absurd while still being family-friendly. Generate exactly 3 different silly taglines.`
          },
          {
            role: 'user',
            content: `Create 3 silly advertising taglines for "${productName}". ${description ? `Product description: ${description}` : ''} Make them funny, memorable, and ${stylePrompt}. Return them as a JSON array of strings.`
          }
        ],
        temperature: 0.9,
      }),
    });

    const taglineData = await taglineResponse.json();
    console.log('OpenAI tagline response:', taglineData);

    let taglines;
    try {
      taglines = JSON.parse(taglineData.choices[0].message.content);
    } catch (e) {
      // Fallback if JSON parsing fails
      taglines = [
        `${productName}: So good, even your pets will be jealous!`,
        `Warning: ${productName} may cause uncontrollable happiness!`,
        `From zero to hero with ${productName} - results not typical, but dreams are free!`
      ];
    }

    // Generate creative concepts
    const conceptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a creative director who explains the funny concept behind silly ads. Write short, entertaining explanations of why an ad concept is funny or clever.`
          },
          {
            role: 'user',
            content: `For each of these taglines for "${productName}", write a brief, funny explanation of the ad concept: ${taglines.join(', ')}. Return as a JSON array of strings.`
          }
        ],
        temperature: 0.8,
      }),
    });

    const conceptData = await conceptResponse.json();
    console.log('OpenAI concept response:', conceptData);

    let concepts;
    try {
      concepts = JSON.parse(conceptData.choices[0].message.content);
    } catch (e) {
      // Fallback concepts
      concepts = [
        `We imagined this ad as ${productName} being so amazing that it defies the laws of physics.`,
        `We imagined this ad as a superhero origin story, but for ${productName}.`,
        `We imagined this ad as a documentary about how ${productName} changed everything.`
      ];
    }

    // Create mock ad data with generated content
    const generatedAds = taglines.slice(0, 3).map((tagline: string, index: number) => ({
      id: index + 1,
      image: `https://images.unsplash.com/photo-${index === 0 ? '1486312338219-ce68d2c6f44d' : index === 1 ? '1498050108023-c5249f4df085' : '1461749280684-dccba630e2f6'}?w=400&h=400&fit=crop`,
      tagline: tagline,
      concept: concepts[index] || `We imagined this ad as a celebration of how amazing ${productName} really is.`
    }));

    console.log('Generated ads:', generatedAds);

    return new Response(JSON.stringify({ ads: generatedAds }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-silly-ad function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to generate ads', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
