
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

    // Create different style prompts based on user selection
    let styleContext = '';
    switch (style) {
      case 'cartoon':
        styleContext = 'cartoon-style, colorful, playful, with exaggerated features';
        break;
      case 'retro':
        styleContext = 'retro 1950s advertisement style, vintage colors, classic typography';
        break;
      case 'random':
        styleContext = 'completely random and unexpected style, surprise me';
        break;
      default:
        styleContext = 'fun and engaging';
    }

    // Generate silly taglines using GPT-4o-mini
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
            content: `Create 3 silly advertising taglines for "${productName}". ${description ? `Product description: ${description}` : ''} Make them funny, memorable, and ${styleContext}. Return them as a JSON array of strings.`
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

    // Generate creative concepts using GPT-4o-mini
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

    // Generate images using gpt-image-1 for each tagline
    const generatedAds = await Promise.all(
      taglines.slice(0, 3).map(async (tagline: string, index: number) => {
        try {
          const imagePrompt = `Create a silly, cartoon-style ad poster for a product called "${productName}".

Product Description: ${description || 'An amazing product that will change your life'}

Visual Instructions:
Imagine a humorous real-life situation where this product is exaggerated in a funny way. Make it feel like something unexpected but relatable. The product should be the central hero in the scene, portrayed with personality.

Style:
Use a ${styleContext} style, bright colors, and exaggerated expressions. Think of classic 1960s print ads meets modern meme humor. 

Scene Composition:
Include a character or context that humorously dramatizes the product benefit or pain point. Place the product image visibly in the center or held by a character. Add a playful or absurd prop or setting.

Text Overlay:
At the top or center, add this headline in bold retro comic-style text: "${tagline}"  
Make the text large and readable, with fun bubble or banner styling. Leave space at bottom right to place a logo overlay later.

Style tags: cartoon, retro poster, comic book, funny, colorful, high contrast`;

          console.log(`Generating image ${index + 1} with prompt:`, imagePrompt);

          const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${openAIApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'gpt-image-1',
              prompt: imagePrompt,
              n: 1,
              size: '1024x1024',
              quality: 'high',
              output_format: 'png'
            }),
          });

          const imageData = await imageResponse.json();
          console.log(`Image ${index + 1} response:`, imageData);

          if (imageData.data && imageData.data[0]) {
            return {
              id: index + 1,
              image: imageData.data[0].b64_json ? `data:image/png;base64,${imageData.data[0].b64_json}` : imageData.data[0].url,
              tagline: tagline,
              concept: concepts[index] || `We imagined this ad as a celebration of how amazing ${productName} really is.`
            };
          } else {
            throw new Error('No image data returned');
          }
        } catch (imageError) {
          console.error(`Error generating image ${index + 1}:`, imageError);
          // Fallback to placeholder image
          return {
            id: index + 1,
            image: `https://images.unsplash.com/photo-${index === 0 ? '1486312338219-ce68d2c6f44d' : index === 1 ? '1498050108023-c5249f4df085' : '1461749280684-dccba630e2f6'}?w=400&h=400&fit=crop`,
            tagline: tagline,
            concept: concepts[index] || `We imagined this ad as a celebration of how amazing ${productName} really is.`
          };
        }
      })
    );

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
