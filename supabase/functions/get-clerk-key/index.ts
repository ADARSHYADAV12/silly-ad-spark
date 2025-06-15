
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

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
    // Try to read from either secret name that might exist
    const key = Deno.env.get("VITE_CLERK_PUBLISHABLE_KEY") || Deno.env.get("CLERK_PUBLISHABLE_KEY");
    
    console.log("Looking for Clerk key...");
    console.log("VITE_CLERK_PUBLISHABLE_KEY exists:", !!Deno.env.get("VITE_CLERK_PUBLISHABLE_KEY"));
    console.log("CLERK_PUBLISHABLE_KEY exists:", !!Deno.env.get("CLERK_PUBLISHABLE_KEY"));
    
    if (!key) {
      console.error("No Clerk key found in environment");
      return new Response(
        JSON.stringify({ 
          error: "Clerk key not found",
          debug: {
            hasViteKey: !!Deno.env.get("VITE_CLERK_PUBLISHABLE_KEY"),
            hasClerkKey: !!Deno.env.get("CLERK_PUBLISHABLE_KEY")
          }
        }), 
        { 
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    console.log("Clerk key found, returning to frontend");
    return new Response(JSON.stringify({ key }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in get-clerk-key function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }), 
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
