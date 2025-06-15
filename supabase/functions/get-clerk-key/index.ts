
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (_req) => {
  // Read secret from Supabase env
  const key = Deno.env.get("VITE_CLERK_PUBLISHABLE_KEY");
  if (!key) {
    return new Response(JSON.stringify({ error: "Clerk key not found" }), { status: 500 });
  }
  return new Response(JSON.stringify({ key }), {
    headers: { "Content-Type": "application/json" },
  });
});
